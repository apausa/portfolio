import type p5 from 'p5';

export const asciiOrb = (p: p5) => {
  const orbChars = [' ', '·', ':', '-', '=', '+', '*', '#'];
  let orbRadius: number;
  let charSize: number;
  let rows: number;
  let cols: number;
  let time = 0;
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    calculateDimensions();
  };

  const calculateDimensions = () => {
    // Set the orb radius based on screen size
    orbRadius = Math.min(p.width, p.height) * 0.2;
    
    // Calculate character size and grid dimensions
    charSize = 16;
    rows = Math.floor(p.height / charSize);
    cols = Math.floor(p.width / charSize);
  };

  const calculateSphereDepth = (x: number, y: number, centerX: number, centerY: number, radius: number): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    const distance2D = Math.sqrt(dx * dx + dy * dy);
    
    if (distance2D > radius) return -1; // Outside sphere
    
    // Calculate z-depth using sphere equation: x² + y² + z² = r²
    const z = Math.sqrt(radius * radius - distance2D * distance2D);
    
    // Return normalized depth (0 = edge, 1 = center)
    return z / radius;
  };

  const calculateLighting = (x: number, y: number, centerX: number, centerY: number, radius: number, lightX: number, lightY: number, lightZ: number): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    const distance2D = Math.sqrt(dx * dx + dy * dy);
    
    if (distance2D > radius) return 0;
    
    // Calculate the surface normal at this point
    const z = Math.sqrt(radius * radius - distance2D * distance2D);
    
    // Normalize the surface normal vector
    const normalX = dx / radius;
    const normalY = dy / radius;
    const normalZ = z / radius;
    
    // Calculate light direction vector (from surface point to light)
    const lightDirX = lightX - dx;
    const lightDirY = lightY - dy;
    const lightDirZ = lightZ - z;
    
    // Normalize light direction
    const lightDistance = Math.sqrt(lightDirX * lightDirX + lightDirY * lightDirY + lightDirZ * lightDirZ);
    const lightDirNormX = lightDirX / lightDistance;
    const lightDirNormY = lightDirY / lightDistance;
    const lightDirNormZ = lightDirZ / lightDistance;
    
    // Calculate dot product for lighting intensity
    const dotProduct = normalX * lightDirNormX + normalY * lightDirNormY + normalZ * lightDirNormZ;
    
    // Create softer, broader lighting with increased area
    const softLighting = Math.pow(Math.max(0, dotProduct), 0.6);
    
    // Return lighting intensity that uses the FULL character range with minimum ambient
    // Ensure we never go completely dark to avoid total fadeouts
    return Math.max(0, Math.min(1.0, softLighting));
  };

  p.draw = () => {
    // Update time for animation (slower)
    time += 0.008;
    
    p.background(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(charSize);
    p.textFont('monospace');

    const centerX = p.width / 2;
    const centerY = p.height / 2;
    
    // First light source - complex, varied movement
    const lightRadius = orbRadius * 1.8;
    
    // Light 1: Multiple sine waves for organic movement
    const light1X = Math.cos(time) * lightRadius * 0.7 + Math.cos(time * 1.3) * lightRadius * 0.3;
    const light1Y = Math.sin(time * 0.7) * lightRadius * 0.6 + Math.sin(time * 1.7) * lightRadius * 0.4;
    const zVariation1 = Math.sin(time * 0.4) * orbRadius * 0.2;
    const light1Z = orbRadius * 1.2 + zVariation1;
    
    // Light 2: Different movement pattern for variety
    const light2X = Math.sin(time * 0.9) * lightRadius * 0.8 + Math.cos(time * 2.1) * lightRadius * 0.2;
    const light2Y = Math.cos(time * 1.1) * lightRadius * 0.7 + Math.sin(time * 0.8) * lightRadius * 0.3;
    const zVariation2 = Math.cos(time * 0.6) * orbRadius * 0.2;
    const light2Z = orbRadius * 1.3 + zVariation2;

    // Draw the ASCII orb
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * charSize;
        const y = row * charSize;
        
        // Calculate sphere depth
        const depth = calculateSphereDepth(x, y, centerX, centerY, orbRadius);
        
        if (depth >= 0) {
          // Calculate lighting intensity from both light sources
          const light1Intensity = calculateLighting(x, y, centerX, centerY, orbRadius, light1X, light1Y, light1Z);
          const light2Intensity = calculateLighting(x, y, centerX, centerY, orbRadius, light2X, light2Y, light2Z);
          
          // Combine both light sources with equal intensity (additive lighting, clamped to max 1.0)
          const combinedLighting = Math.min(1.0, light1Intensity + light2Intensity);
          
          // Use ONLY lighting for character selection - no depth influence
          const characterIntensity = combinedLighting;
          
          // Ensure we can reach the brightest character (#) 
          const charIndex = Math.min(Math.floor(characterIntensity * orbChars.length), orbChars.length - 1);
          const char = orbChars[charIndex];
          
          p.fill('#10069F'); // Pure blue color, only alpha varies
          p.text(char, x + charSize/2, y + charSize/2);
        }
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    calculateDimensions();
  };
};
