import { useEffect, useState } from "react";

import { IconBrandSpotifyFilled, IconMapPinFilled } from "@tabler/icons-react";
import axios from "axios";

import type { SpotifyFrontResponse } from "@/lib/types/home";

export default function Footer() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyFrontResponse>();

  const fetchRecentlyPlayed = async () => {
    const response = await axios.get("/api/spotify");
    setRecentlyPlayed(response.data);
  };

  useEffect(() => {
    fetchRecentlyPlayed();
  }, []);

  return (
    <footer className="flex flex-col gap-2 w-full">
      <div className="text-md text-center flex items-center gap-2">
        <IconMapPinFilled className="w-4 h-4" />
        <p>
          Based in{" "}
          <a
            className="no-underline hover:underline"
            href="https://maps.app.goo.gl/dUd1mCLUGf1VZNbu5"
            rel="noreferrer"
            target="_blank"
          >
            Madrid, Spain
          </a>
        </p>
      </div>
      <div className="text-md text-center flex items-center gap-2">
        <IconBrandSpotifyFilled className="w-4 h-4" />
        <p>
          Last played —{" "}
          {recentlyPlayed && "error" in recentlyPlayed ? (
            <span>{recentlyPlayed.error}</span>
          ) : (
            <a
              className="no-underline hover:underline"
              href={recentlyPlayed?.spotify}
              rel="noreferrer"
              target="_blank"
            >
              {recentlyPlayed?.name ?? "Loading..."}
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}
