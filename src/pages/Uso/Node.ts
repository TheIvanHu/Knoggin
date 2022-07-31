import { drawCircle, drawText } from "./helper";

export default class Node {
  createdAt: number = Date.now();
  x: number;
  y: number;
  radius: number;
  color: string;
  letter: string;

  duration = 1000;

  matched: boolean;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    letter: string,
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.letter = letter;
  }

  update() {}

  render(ctx: CanvasRenderingContext2D) {
    const alpha = 1 - (Date.now() - this.createdAt) / this.duration;

    drawCircle(ctx, this.x, this.y, this.radius, this.color, {
      alpha,
    });

    drawText(ctx, this.letter, this.x, this.y, "30px Outfit", "white");
  }
}
