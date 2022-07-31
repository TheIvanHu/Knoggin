import * as React from "react";
import "./styles.scss";
import * as $ from "jquery";
import { drawCircle } from "./helper";
import { init as initKontra } from "kontra";

const mouse = {
  x: 0,
  y: 0,
  down: false,
};

const Uso: React.FC = () => {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null);
  const [gameStarted, setGameStarted] = React.useState(false);

  React.useEffect(() => {
    initKontra();

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;

    const update = () => {};

    const animate = () => {
      requestAnimationFrame(() => animate());

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!gameStarted) {
      }
      ctx.fillText(
        "Press any key to start",
        canvas.width / 2,
        canvas.height / 2,
      );

      drawCircle(ctx, mouse.x, mouse.y, 20, mouse.down ? "lime" : "red");

      update();
    };

    animate();

    $(canvas).mousemove(function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    $(document)
      .on("keydown", () => {
        mouse.down = true;
        setGameStarted(true);
      })
      .on("keyup", () => {
        mouse.down = false;
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
