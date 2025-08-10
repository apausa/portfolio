import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
