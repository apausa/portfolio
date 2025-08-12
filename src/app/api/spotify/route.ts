/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

import type { SpotifyBackResponse } from "@/lib/types/api";

// Initialize Redis
const redis = Redis.fromEnv();

export async function refreshToken() {
  const params = new URLSearchParams();
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID!);
  params.append("grant_type", "authorization_code");
  params.append("code", process.env.SPOTIFY_CLIENT_CODE!);
  params.append("redirect_uri", "http://127.0.0.1:3000");
  params.append("code_verifier", process.env.SPOTIFY_CLIENT_VERIFIER!);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!response.ok)
    throw new Error(
      `Could not refresh token ${response.status} ${response.statusText}`,
    );

  const data = await response.json();

  await redis.set("spotify_token", data.access_token);
}

async function fetchSpotifyData(token: string): Promise<Response> {
  return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function GET() {
  try {
    let token = await redis.get("spotify_token");

    // if (!token) {
    //   throw new Error("No Spotify token available");
    // }

    let response = await fetchSpotifyData(token as string);

    // Handle token refresh only once
    if (response.status === 401) {
      await refreshToken();
      token = await redis.get("spotify_token");
      response = await fetchSpotifyData(token as string);
    }

    if (!response.ok) {
      throw new Error(
        `Could not retrieve song ${response.status} ${response.statusText}`,
      );
    }

    const data: SpotifyBackResponse = await response.json();

    const {
      track: {
        external_urls: { spotify },
        name,
      },
    } = data.items[0];

    return NextResponse.json({ spotify, name });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
