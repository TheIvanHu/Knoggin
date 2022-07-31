import * as React from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      console.log("stop");
    }
  }, [counter]);

  return (
    <div>
      <div>Countdown: {counter}</div>
    </div>
  );
};

export default Timer;
