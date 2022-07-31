export default class Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  letter: string;
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
}
