import { drawCircle, drawText } from "./helper";

export default class Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  letter: string;

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
    drawCircle(ctx, this.x, this.y, this.radius, this.color);

    drawText(ctx, this.letter, this.x, this.y, "30px Outfit", "white");
  }
}
