/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */

"use client";

import React, { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

import asciiOrb from "@/lib/sketches/asciiOrb";

import type p5 from "p5";

const P5Sketch = (): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up existing instance
    if (p5Instance.current) {
      p5Instance.current.remove();
      p5Instance.current = null;
    }

    (async () => {
      const P5 = (await import("p5")).default;
      const currentTheme = resolvedTheme;
      p5Instance.current = new P5(
        asciiOrb(currentTheme),
        containerRef.current!,
      );
    })();

    return () => {
      p5Instance.current?.remove();
      p5Instance.current = null;
    };
  }, [resolvedTheme]);

  return React.createElement("div", {
    ref: containerRef,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
    },
  });
};

export default P5Sketch;
