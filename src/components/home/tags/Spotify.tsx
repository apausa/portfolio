import { useEffect, useState } from "react";

import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import axios from "axios";

import { cn } from "@/lib/utils/tailwind";

import type { SpotifyResponse } from "@/lib/types/home";

export default function Spotify({ className }: { className: string }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyResponse>({
    error: "Loading song...",
  });

  const fetchRecentlyPlayed = async () => {
    const response = await axios.get("/api/spotify");
    setRecentlyPlayed(response.data);
  };

  useEffect(() => {
    fetchRecentlyPlayed();
  }, []);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <IconBrandSpotifyFilled className="w-4" />
      <p>
        Last played →{" "}
        {"error" in recentlyPlayed ? (
          <span>{recentlyPlayed.error}</span>
        ) : (
          <a
            className="no-underline hover:underline font-bold"
            href={recentlyPlayed?.link}
            rel="noreferrer"
            target="_blank"
          >
            {recentlyPlayed?.name}
          </a>
        )}
      </p>
    </div>
  );
}
