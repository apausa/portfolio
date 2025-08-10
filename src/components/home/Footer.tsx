import { IconBrandSpotifyFilled, IconMapPinFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 w-full">
      <div className="text-md text-center flex items-center gap-2">
        <IconMapPinFilled className="w-4 h-4" />
        <p>Currently in</p>
        <p>—</p>
        <a
          className="no-underline hover:underline"
          href="https://maps.app.goo.gl/dUd1mCLUGf1VZNbu5"
          rel="noreferrer"
          target="_blank"
        >
          Madrid, Spain
        </a>
      </div>
      <div className="text-md text-center flex items-center gap-2">
        <IconBrandSpotifyFilled className="w-4 h-4" />
        <p>Last played</p>
        <p>—</p>
        <a
          className="no-underline hover:underline"
          href="https://maps.app.goo.gl/dUd1mCLUGf1VZNbu5"
          rel="noreferrer"
          target="_blank"
        >
          [To do!]
        </a>
      </div>
    </footer>
  );
}
