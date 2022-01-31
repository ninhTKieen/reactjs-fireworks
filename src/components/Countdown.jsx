import React, { useEffect } from "react";

const Countdown = ({ countdown, setCountdown, time, setTime }) => {
  useEffect(() => {
    const countdownDate = new Date("Feb 01, 2022 00:00:00").getTime();

    const countDown = setInterval(function () {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(days + "d" + hours + "h" + minutes + "m" + seconds + "s");

      if (distance < 0) {
        clearInterval(countDown);
        setTime("HAPPY NEW YEAR 2022");
        setCountdown(false);
      }
    }, 1000);
  }, [setCountdown, setTime]);

  return (
    <React.Fragment>
      <div style={style}>{time}</div>
    </React.Fragment>
  );
};

const style = {
  fontSize: "90px",
  textAlign: "center",
};

export default Countdown;
