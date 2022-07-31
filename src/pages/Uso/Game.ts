import { keys } from "../SudoType/constants";
import Node from "./Node";
import { mouse } from ".";

export class Game {
  started: boolean;

  nodes: Node[] = [];
  lastAddedTime: number = Date.now();

  pressedKey: string;

  update() {
    if (Date.now() - this.lastAddedTime > 1000) {
      this.lastAddedTime = Date.now();
      this.nodes.push(
        new Node(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          Math.random() * 10 + 20,
          "red",
          keys[Math.floor(Math.random() * keys.length)],
        ),
      );
    }

    this.nodes.forEach((node) => {
      const distance = Math.sqrt(
        Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2),
      );

      if (distance < node.radius + 20 && game.pressedKey === node.letter) {
        node.matched = true;
      }

      node.update();
    });

    for (let i = this.nodes.length - 1; i > -0; i--) {
      if (this.nodes[i].matched) {
        this.nodes.splice(i, 1);
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.nodes.forEach((node) => {
      node.render(ctx);
    });
  }
}

const game = new Game();

export default game;
