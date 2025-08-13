/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

import { SPOTIFY_URL_PLAYER, SPOTIFY_URL_TOKEN } from "@/lib/constants/api";

import type { SpotifySong, SpotifyToken } from "@/lib/types/api";

const redis = Redis.fromEnv();

async function refreshToken(token: string) {
  /* At first:
   * - In "grant_type", replace "authorization_code" for "refresh_token"
   * - Replace "refresh_token" for "code", with "process.env.SPOTIFY_FIRST_CODE!"
   * - Add 'params.append("redirect_uri", "http://127.0.0.1:3000");'
   * - Add 'params.append("code_verifier", process.env.SPOTIFY_FIRST_VERIFIER!);'
   * - Replace data.access_token for data.refresh_token in Redis */

  const params = new URLSearchParams();
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID!);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token);

  const response = await fetch(SPOTIFY_URL_TOKEN, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!response.ok) throw new Error("Failed to refresh token");

  const data: SpotifyToken = await response.json();

  await redis.set("spotify:token", data.refresh_token);

  return data.access_token;
}

async function getToken(): Promise<string> {
  const token: string | null = await redis.get("spotify:token");

  if (!token) throw new Error("Failed to retrieve token");

  return token;
}

async function getSong(token: string) {
  return fetch(SPOTIFY_URL_PLAYER, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function GET() {
  try {
    let token: string = await getToken();
    let response = await getSong(token);

    if (response.status === 401) {
      token = await refreshToken(token);
      response = await getSong(token);
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
