/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client';

import React, { useEffect, useRef } from 'react';

import asciiOrb from '@/lib/asciiOrb';

import type p5 from 'p5';

const P5Sketch = (): React.ReactElement => {
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
      zIndex: -1,
    },
  });
};

export default P5Sketch;
