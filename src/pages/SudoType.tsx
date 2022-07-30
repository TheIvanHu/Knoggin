import * as React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const textToMatch =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const isLetter = (key) => key >= "a" && key <= "z";

const KeyBox: React.FC = () => {
  return null;
};

const SudoType: React.FC = () => {
  const navigate = useNavigate();

  const [correctText, setCorrectText] = React.useState("");
  const [amountOfWrongLetters, setAmountOfWrongLetters] = React.useState(0);
  const [wpm, setWpm] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);

  const calculateWpm = () => {
    const time = Date.now() - startTime;
    const wpm = Math.round(textToMatch.length / 5 / (time / 1000 / 60));
    setWpm(wpm);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setStartTime(Date.now());
    }

    if (e.key === "Backspace") {
      setCorrectText(correctText.slice(0, -1));
    } else {
      const newCorrectText = correctText + e.key;
      // Check if the new correct text is the same as the text to match
      if (textToMatch.indexOf(newCorrectText) === 0) {
        setCorrectText(newCorrectText);
      } else if (/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(e.keyCode))) {
        setAmountOfWrongLetters(amountOfWrongLetters + 1);
      }
    }

    calculateWpm();
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  return (
    <div id="home">
      <p>SudoType</p>

      <div
        style={{
          maxWidth: "600px",
          maxHeight: "200px",
          overflow: "scroll",
        }}
      >
        <span>{correctText}</span>
        <span style={{ color: "grey" }}>
          {textToMatch.slice(correctText.length)}
        </span>
      </div>

      <br />

      <input
        className="input-race"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        // onKeyPress={e => this.onKeyPress(e)}
        // onChange={value => this.handleChange(value)}
        // maxLength={quote.length}
        // disabled={disabled || finished}
      />

      <p> {amountOfWrongLetters} </p>
      <p> {wpm} </p>
    </div>
  );
};

export default SudoType;
