import type p5 from 'p5';

export const ellipseSketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.noStroke();
    p.ellipse(p.width / 2, p.height / 2, p.width, p.height);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};
