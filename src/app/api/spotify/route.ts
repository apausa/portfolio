/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

import { SPOTIFY_URL_PLAYER, SPOTIFY_URL_TOKEN } from "@/lib/constants/api";

import type { SpotifySong, SpotifyToken } from "@/lib/types/api";

const redis = Redis.fromEnv();

async function getRefreshToken() {
  // Get refresh token from Redis
  const refreshToken: string | null = await redis.get("spotify:refresh");

  if (!refreshToken) throw new Error("Failed to retrieve the refresh token");

  const params = new URLSearchParams();
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID!);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refreshToken);

  // At first, no quotes in .env
  // const params = new URLSearchParams();
  // params.append("client_id", process.env.SPOTIFY_CLIENT_ID!);
  // params.append("grant_type", "authorization_code");
  // params.append("code", process.env.SPOTIFY_FIRST_TOKEN!);
  // params.append("redirect_uri", "https://www.apausa.dev/");
  // params.append("code_verifier", process.env.SPOTIFY_FIRST_VERIFIER!);

  const response = await fetch(SPOTIFY_URL_TOKEN, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!response.ok) throw new Error("Failed to refresh the access token");

  const data: SpotifyToken = await response.json();

  // Update refresh and access tokens in Redis
  await redis.set("spotify:refresh", data.refresh_token);
  await redis.set("spotify:access", data.access_token);

  return data.access_token;
}

async function getSong(token: string) {
  return fetch(SPOTIFY_URL_PLAYER, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function getAccessToken(): Promise<string> {
  const token: string | null = await redis.get("spotify:access");

  if (!token) throw new Error("Failed to retrieve the access token");

  return token;
}

export async function GET() {
  try {
    let accessToken: string = await getAccessToken();
    let response = await getSong(accessToken);

    if (response.status === 401) {
      accessToken = await getRefreshToken();
      response = await getSong(accessToken);
    }

    if (!response.ok) throw new Error("Failed to retrieve song");

    const data: SpotifySong = await response.json();

    return NextResponse.json({
      artists: data.items[0].track.artists.map((artist) => artist.name),
      image: data.items[0].track.album.images[0].url,
      link: data.items[0].track.external_urls.spotify,
      name: data.items[0].track.name,
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
