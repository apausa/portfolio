'use client';

import React, { useEffect, useRef } from 'react';
import type p5 from 'p5';
import asciiOrb from '@/lib/asciiOrb';

export default function P5Sketch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    (async () => {
      const P5 = (await import('p5')).default;
      p5Instance.current = new P5(asciiOrb, containerRef.current!);
    })();

    return () => {
      p5Instance.current?.remove();
      p5Instance.current = null;
    };
  }, []);

  return React.createElement('div', {
    ref: containerRef,
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1
    }
  });
}