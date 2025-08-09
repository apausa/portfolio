/* eslint-disable import-x/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
