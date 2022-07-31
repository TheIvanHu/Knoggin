import * as React from "react";
import "./styles.scss";
import * as $ from "jquery";
import { drawCircle, drawRectangle, drawText } from "./helper";
import { init as initKontra } from "kontra";
import game from "./Game";

export const mouse = {
  x: 0,
  y: 0,
};

const Uso: React.FC = () => {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = React.useState(false);

  React.useEffect(() => {
    initKontra();

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;

    const update = () => {
      game.update();
    };

    const animate = () => {
      requestAnimationFrame(() => animate());

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawRectangle(ctx, 0, 0, canvas.width, canvas.height, "black");

      game.render(ctx);

      if (!game.started) {
        drawText(
          ctx,
          "Press space to start",
          canvas.width / 2,
          canvas.height / 2,
          "30px Outfit",
          "white",
        );
      }

      drawCircle(ctx, mouse.x, mouse.y, 20, game.pressedKey ? "lime" : "red");

      if (game.pressedKey) {
        drawText(
          ctx,
          game.pressedKey,
          mouse.x,
          mouse.y,
          "30px Outfit",
          "white",
        );
      }

      update();
    };

    animate();

    $(canvas).mousemove(function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    $(document)
      .on("keydown", (e) => {
        game.started = true;

        const isAlphabet = /[a-zA-Z0-9-_ ]/.test(
          String.fromCharCode(e.keyCode),
        );
        if (isAlphabet) {
          game.pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
        }
      })
      .on("keyup", () => {
        game.pressedKey = null;
      });
  }, []);

  return (
    <div id="home">
      <h2>Uso</h2>

      <canvas
        id="canvas"
        style={{
          cursor: "none",
        }}
      ></canvas>
      <div className="uso__title"></div>
    </div>
  );
};

export default Uso;
