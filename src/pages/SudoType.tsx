import * as React from "react";
import "./styles.scss";

const textToMatch = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const SudoType: React.FC = () => {
  const [correctText, setCorrectText] = React.useState("");
  const [amountOfWrongLetters, setAmountOfWrongLetters] = React.useState(0);
  const [wpm, setWpm] = React.useState(0);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setCorrectText(correctText.slice(0, -1));
    } else {
      const newCorrectText = correctText + e.key;
      // Check if the new correct text is the same as the text to match
      if (textToMatch.indexOf(newCorrectText) === 0) {
        setCorrectText(newCorrectText);
      } else {
        setAmountOfWrongLetters(amountOfWrongLetters + 1);
      }
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  return (
    <div id="home">
      <p>SudoType</p>

      <div>
        <span>{correctText}</span>
        <span style={{ color: "grey" }}>
          {textToMatch.slice(correctText.length)}
        </span>
      </div>

      <br />

      <input
        // ref={(ref) => { this.input = ref; }}
        className="input-race"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        // onKeyPress={e => this.onKeyPress(e)}
        // onChange={value => this.handleChange(value)}
        // maxLength={quote.length}
        // disabled={disabled || finished}
      />
    </div>
  );
};

export default SudoType;
