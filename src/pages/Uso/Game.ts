import { keys } from "../SudoType/constants";
import Node from "./Node";
import { mouse } from ".";

export enum GameState {
  Ready,
  Playing,
  GameOver,
}

export class Game {
  state: GameState = GameState.Ready;

  nodes: Node[] = [];
  lastAddedTime: number = Date.now();

  score = 0;
  lostNodes: number = 0;
  addedNodes = 0;

  pressedKey: string;

  update(canvas: HTMLCanvasElement) {
    if (
      Date.now() - this.lastAddedTime > 1000 &&
      this.state === GameState.Playing
    ) {
      this.lastAddedTime = Date.now();
      this.nodes.push(
        new Node(
          Math.random() * (canvas.width - 100) + 50,
          Math.random() * (canvas.height - 100) + 50,
          Math.random() * 10 + 20,
          "red",
          keys[Math.floor(Math.random() * keys.length)],
        ),
      );

      this.addedNodes++;
    }

    if (this.addedNodes > 20) {
      this.state = GameState.GameOver;
    }

    this.nodes.forEach((node) => {
      const distance = Math.sqrt(
        Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2),
      );

      if (distance < node.radius + 20 && game.pressedKey === node.letter) {
        node.matched = true;
        this.score++;
      }

      if (Date.now() - node.createdAt > node.duration) {
        node.matched = true;
        this.lostNodes++;
      }

      node.update();
    });

    for (let i = this.nodes.length - 1; i >= 0; i--) {
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
