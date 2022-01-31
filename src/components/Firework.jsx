import React from "react";
import { Fireworks } from "fireworks-js/dist/react";
import { Howl, Howler } from "howler";
import HappyNewYear from "src/audio/hpny.mp3";

const audio = {
  sound: HappyNewYear,
};

const Firework = ({ time }) => {
  const options = {
    speed: 3,
  };

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      autoplay: true,
      loop: true,
      html5: true,
    });
    Howler.autoUnlock = true;
    sound.play();
  };

  return (
    <React.Fragment>
      <div onClick={() => SoundPlay(audio.sound)}>
        <Fireworks options={options} style={style.fireworks}>
          <div style={style.title}>{time}</div>
        </Fireworks>
      </div>
    </React.Fragment>
  );
};

const style = {
  fireworks: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    textAlign: "center",
  },
  title: {
    fontSize: "90px",
  },
};

export default Firework;
