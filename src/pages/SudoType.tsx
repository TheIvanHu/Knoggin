import * as React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { textToMatch, keys } from "./constants";

const KeyBox: React.FC<any> = ({ letter }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
        width: "50px",
        textAlign: "center",
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
};

const KeyRow: React.FC<any> = ({ keys }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      {keys.map((letter, key) => {
        return <KeyBox key={key} letter={letter} />;
      })}
    </div>
  );
};

const KeyBoard: React.FC<any> = ({ randomKeys }) => {
  let firstTenKeys = randomKeys.slice(0, 10);
  let secondNineKeys = randomKeys.slice(10, 19);
  let thirdSevenKeys = randomKeys.slice(19, 26);

  return (
    <>
      <KeyRow keys={firstTenKeys} />
      <KeyRow keys={secondNineKeys} />
      <KeyRow keys={thirdSevenKeys} />
    </>
  );
};

const SudoType: React.FC = () => {
  const [correctText, setCorrectText] = React.useState("");
  const [amountOfWrongLetters, setAmountOfWrongLetters] = React.useState(0);
  const [wpm, setWpm] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [randomKeys, setRandomKeys] = React.useState([]);

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

    if (!e.key) return;

    if (e.key === "Backspace") {
      setCorrectText(correctText.slice(0, -1));
      return;
    }

    let convertedKey;
    if (e.key === " ") {
      convertedKey = " ";
    } else {
      const isUppercase = e.key.toUpperCase() === e.key;

      const keyIndex = keys.indexOf(e.key.toLowerCase());

      if (!randomKeys[keyIndex]) {
        setAmountOfWrongLetters(amountOfWrongLetters + 1);
        return;
      }

      convertedKey = isUppercase
        ? randomKeys[keyIndex].toUpperCase()
        : randomKeys[keyIndex];
    }

    const newCorrectText = correctText + convertedKey;
    // Check if the new correct text is the same as the text to match
    if (textToMatch.indexOf(newCorrectText) === 0) {
      setCorrectText(newCorrectText);
    } else if (/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(e.keyCode))) {
      setAmountOfWrongLetters(amountOfWrongLetters + 1);
    }

    calculateWpm();
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  React.useEffect(() => {
    const copyKeys = keys.slice(0);
    setRandomKeys(copyKeys.sort(() => Math.random() - 0.5));
  }, []);

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

      <KeyBoard randomKeys={randomKeys} />
    </div>
  );
};

export default SudoType;
