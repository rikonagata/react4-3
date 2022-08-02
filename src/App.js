import React from "react";

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

function Guess({ onGuess }) {
  const [val, setVal] = React.useState(0);

  const handleChange = (e) => setVal(e.target.value);
  const handleClick = () => onGuess(val * 1);

  return (
    <>
      <input type="number" value={val} onChange={handleChange} />
      <button onClick={handleClick}>予想する</button>
    </>
  );
}

function NumberGuessing() {
  const max = 50;
  const initialCount = 5;
  const [answer, setAnswer] = React.useState(random(max));
  const [count, setCount] = React.useState(initialCount);
  const [message, setMessage] = React.useState("");

  const judge = (num) => {
    if (count === 0) return;

    setCount(count - 1);

    if (num === answer) {
      setMessage("正解です！");
    } else if (count === 1) {
      setMessage("残念でした！正解は" + answer);
    } else if (num > answer) {
      setMessage("もっと小さいです");
    } else if (num < answer) {
      setMessage("もっと大きいです");
    }
  };

  const replay = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage("");
  };

  return (
    <>
      <Guess onGuess={judge} />
      <p>{message}</p>
      <p>
        <button onClick={replay}>はじめから</button>
      </p>
    </>
  );
}

export default NumberGuessing;
