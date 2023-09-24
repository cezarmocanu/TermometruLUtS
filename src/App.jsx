import { useState } from "react";

function getColor(count) {
  if (count < 10) {
    return "rece";
  }

  if (count >= 10 && count < 20) {
    return "normal";
  }

  if (count >= 20 && count < 30) {
    return "cald";
  }

  return "foarte-cald";
}

function TemperatureText({ count, className }) {
  if (count < 10) {
    return <h1 className={className}>Rece</h1>;
  }

  if (count >= 10 && count < 20) {
    return <h1 className={className}>Normal</h1>;
  }

  if (count >= 20 && count < 30) {
    return <h1 className={className}>Cald</h1>;
  }

  return <h1 className={className}>Foarte Cald</h1>;
}

function TermometruCelsius({ count, setCount }) {
  const handleOnIncrementClick = () => {
    setCount(count + 1);
  };

  const handleOnDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count.toFixed(2)} °C</h1>
      <TemperatureText className={getColor(count)} count={count} />
      <button onClick={handleOnDecrementClick}>-</button>
      <button onClick={handleOnIncrementClick}>+</button>
    </div>
  );
}

function computeTempFahrenheit(tempC) {
  return (tempC * 9) / 5 + 32;
}

function celsiusToFahreneit(tempC) {
  return tempC / 33.8;
}

function TermometruFahrenheit({ count, setCount }) {
  const handleOnIncrementClick = () => {
    setCount(count + celsiusToFahreneit(1));
  };

  const handleOnDecrementClick = () => {
    setCount(count - celsiusToFahreneit(1));
  };

  return (
    <div>
      <h1>{computeTempFahrenheit(count).toFixed(2)} °F</h1>
      <TemperatureText className={getColor(count)} count={count} />
      <button onClick={handleOnDecrementClick}>-</button>
      <button onClick={handleOnIncrementClick}>+</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TermometruCelsius count={count} setCount={setCount} />
      <TermometruFahrenheit count={count} setCount={setCount} />
    </div>
  );
}

export default App;
