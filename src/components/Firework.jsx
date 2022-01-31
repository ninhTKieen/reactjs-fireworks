import React, { useEffect } from "react";
import { Fireworks } from "fireworks-js/dist/react";
import { Howl, Howler } from "howler";
import HappyNewYear from "src/audio/hpny.mp3";

const audio = {
  sound: HappyNewYear,
};

const Firework = () => {
  const options = {
    speed: 3,
  };

  const style = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000",
  };

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      autoplay: true,
    });
    sound.play();
  };

  useEffect(() => {
    SoundPlay(audio.sound);
  }, []);

  return (
    <React.Fragment>
      <Fireworks options={options} style={style} />
    </React.Fragment>
  );
};

export default Firework;
