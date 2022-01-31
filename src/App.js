import { useState } from "react";
import "./App.css";
import Countdown from "src/components/Countdown";
import Firework from "src/components/Firework";

const App = () => {
  const [countdown, setCountdown] = useState(true);
  const [time, setTime] = useState("");

  return (
    <div className="container">
      {countdown ? (
        <Countdown
          countdown={countdown}
          setCountdown={setCountdown}
          time={time}
          setTime={setTime}
        />
      ) : (
        <Firework time={time} />
      )}
    </div>
  );
};

export default App;
