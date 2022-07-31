import { time } from "console";
import * as React from "react";
// import Timer from "./Timer";
import * as ReactDOM from "react-dom";

const Stroop: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);

  const [rightAnswer, setRightAnswer] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(0);

  const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
  ];

  const [correctColor, setCorrectColor] = React.useState(
    colors[Math.floor(Math.random() * colors.length)],
  );

  const checkCorrect = (param) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setStartTime(Date.now());
    }

    console.log(param);
    if (rightAnswer == 2) {
      setIsGameOver(true);
    }

    var result = param.c;
    if (result == correctColor) {
      setCorrectColor(colors[Math.floor(Math.random() * colors.length)]);
      setRightAnswer(rightAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
  };

  function ColorList(props) {
    const colors = props.colors;
    const listItems = colors.map((c) => (
      <button onClick={(event) => checkCorrect({ c })}>{c}</button>
    ));
    return <div>{listItems}</div>;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function DisabledList(props) {
    const colors = props.colors;
    const listItems = colors.map((c) => (
      <button onClick={(event) => checkCorrect({ c })} disabled={true}>
        {c}
      </button>
    ));
    return <div>{listItems}</div>;
  }

  return !isGameOver ? (
    <div>
      <h1 style={{ color: correctColor }}>
        {colors[Math.floor(Math.random() * colors.length)]}
      </h1>
      <div>
        <ColorList colors={colors} />
      </div>
    </div>
  ) : (
    <div>
      <h1 style={{ color: "black" }}>Game Over</h1>
      <div>
        <DisabledList colors={colors} />
        <p>{(Date.now() - startTime) / 1000} seconds</p>
      </div>
    </div>
  );
};

export default Stroop;
