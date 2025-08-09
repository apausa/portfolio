/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable @stylistic/max-len */
import type p5 from 'p5';

const asciiOrb = (p: p5): void => {
  const orbChars = [' ', '·', ':', '-', '=', '+', '*', '#'];
  let orbRadius: number;
  let charSize: number;
  let rows: number;
  let cols: number;
  let time = 0;

  const computeDimension = () => {
    orbRadius = Math.min(p.width, p.height) * 0.5;
    charSize = 32;
    rows = Math.floor(p.height / charSize);
    cols = Math.floor(p.width / charSize);
  };

  const computeDepth = (
    x: number,
    y: number,
    centerX: number,
    centerY: number,
    orbRadius: number,
  ): number => {
    const [dx, dy] = [x - centerX, y - centerY];
    const distance2D = Math.sqrt(dx * dx + dy * dy);

    return Math.sqrt(orbRadius * orbRadius - distance2D * distance2D) / orbRadius;
  };

  const computeLight = (
    x: number,
    y: number,
    centerX: number,
    centerY: number,
    orbRadius: number,
    lightX: number,
    lightY: number,
    lightZ: number,
  ): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    const distance2D = Math.sqrt(dx * dx + dy * dy);

    // Calculate the surface normal at this point
    const z = Math.sqrt(orbRadius * orbRadius - distance2D * distance2D);

    // Normalize the surface normal vector
    const normalX = dx / orbRadius;
    const normalY = dy / orbRadius;
    const normalZ = z / orbRadius;

    // Calculate light direction vector (from surface to source)
    const vectorX = lightX - dx;
    const vectorY = lightY - dy;
    const vectorZ = lightZ - z;

    const lightDistance = Math.sqrt(vectorX * vectorX + vectorY * vectorY + vectorZ * vectorZ);

    // Normalize light direction
    const distanceX = vectorX / lightDistance;
    const distanceY = vectorY / lightDistance;
    const distanceZ = vectorZ / lightDistance;

    // Calculate dot product for lighting intensity
    const dotProduct = (normalX * distanceX) + (normalY * distanceY) + (normalZ * distanceZ);

    // Return lighting intensity that uses the FULL character range with minimum ambient
    return Math.max(0, dotProduct);
  };

  p.draw = () => {
    // Update time for animation (slower)
    time += 0.008;

    p.clear();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(charSize);
    p.textFont('monospace');

    const centerX = p.width / 2;
    const centerY = p.height / 2;

    // First light source - complex, varied movement
    const lightRadius = orbRadius * 2;

    // Light 1: Multiple sine waves for organic movement
    const light1X = Math.cos(time) * lightRadius + Math.cos(time) * lightRadius;
    const light1Y = Math.sin(time) * lightRadius + Math.sin(time) * lightRadius;
    const light1Z = Math.sin(time) * orbRadius;

    // Light 2: Different movement pattern for variety
    const light2X = Math.sin(time) * lightRadius + Math.sin(time) * lightRadius;
    const light2Y = Math.cos(time) * lightRadius + Math.cos(time) * lightRadius;
    const light2Z = Math.cos(time) * orbRadius;

    // Draw the ASCII orb
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * charSize;
        const y = row * charSize;

        // Calculate sphere depth
        const depth = computeDepth(x, y, centerX, centerY, orbRadius);

        if (depth >= 0) {
          // Calculate lighting intensity from both light sources
          const light1Intensity = computeLight(x, y, centerX, centerY, orbRadius, light1X, light1Y, light1Z);
          const light2Intensity = computeLight(x, y, centerX, centerY, orbRadius, light2X, light2Y, light2Z);

          // Use ONLY lighting for character selection - no depth influence
          const characterIntensity = Math.min(1.0, light1Intensity + light2Intensity);

          // Ensure we can reach the brightest character (#)
          const charIndex = Math.min(Math.floor(characterIntensity * orbChars.length), orbChars.length - 1);
          const char = orbChars[charIndex];

          p.fill('#CCC');
          p.text(char, x + charSize / 2, y + charSize / 2);
        }
      }
    }
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    computeDimension();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    computeDimension();
  };
};

export default asciiOrb;
