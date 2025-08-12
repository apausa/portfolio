import { useEffect, useState } from "react";

import { IconBrandSpotifyFilled, IconMapPinFilled } from "@tabler/icons-react";
import axios from "axios";

export default function Footer() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<string>("");

  const fetchRecentlyPlayed = async () => {
    try {
      const response = await axios.get("/api/spotify/recently-played");
      setRecentlyPlayed(response.data);
    } catch {
      setRecentlyPlayed("Unable to load recent track");
    }
  };

  useEffect(() => {}, []);

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
        <p>Last played — {recentlyPlayed}</p>
      </div>
    </footer>
  );
}
