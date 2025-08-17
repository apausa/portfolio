"use client";

import { useEffect, useState } from "react";

import { IconClockFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Time({ className }: { className: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = time.getDate();
  const month = time.toLocaleString("default", { month: "long" });
  const year = time.getFullYear();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const timezone = time
    .toString()
    .split(" ")[5]
    .split("")
    .map((char) => char.replace("0", ""))
    .join("");

  return (
    <div
      className={cn("flex items-center gap-2 text-custom-current", className)}
    >
      <IconClockFilled className="w-4 h-4" />
      <p>
        {month} {day}, {year} {hours}:{minutes}:{seconds} at {timezone}
      </p>
    </div>
  );
}
