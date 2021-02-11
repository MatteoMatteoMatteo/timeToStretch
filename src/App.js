import "./App.css";
import classNames from "classnames";
import { Fragment, useState, useEffect } from "react";
import * as Tone from "tone";
import pic from "./Assets/logo.png";
import song1 from "./Assets/song1.mp3";
import song2 from "./Assets/song2.mp3";
import song3 from "./Assets/song3.mp3";
import song4 from "./Assets/song4.mp3";
import song5 from "./Assets/song5.mp3";
import song6 from "./Assets/song6.mp3";
import song7 from "./Assets/song7.mp3";
import song8 from "./Assets/song8.mp3";

function App() {
  const liClasses = classNames("button");

  var interval;
  var interval2;

  const songArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [buffer, setBuffer] = useState(true);
  const [date, setDate] = useState();
  const [stretch, setStretch] = useState();
  const [letsGo, setLetsGo] = useState(false);
  const [song, setSong] = useState(false);

  const handleAll = () => {
    setLetsGo(true);
    // handleClock()
    handleStretch();
    handleAudio();
  };

  const helper = (id) => {
    if (id == 1) {
      return song1;
    }
    if (id == 2) {
      return song2;
    }
    if (id == 3) {
      return song3;
    }
    if (id == 4) {
      return song4;
    }
    if (id == 5) {
      return song5;
    }
    if (id == 6) {
      return song6;
    }
    if (id == 7) {
      return song7;
    }
    if (id == 8) {
      return song8;
    }
  };

  const handleAudio = () => {
    Tone.start();

    var ohoh = false;
    interval = setInterval(() => {
      if (!ohoh && new Date().getMinutes() == 0) {
        var item = songArray[Math.floor(Math.random() * songArray.length)];
        var player = new Tone.Player({ url: helper(item) }).toDestination();
        setSong(true);
        player.autostart = true;
        clearInterval(interval);
        player.onstop = () => {
          setSong(false);
          ohoh = false;
          setLetsGo(false);
          clearInterval(interval2);
          ohoh = true;
        };
      }
    }, 30000);
  };

  const handleStretch = () => {
    var timeUntil = 60 - new Date().getMinutes();
    setStretch(() => timeUntil);

    interval2 = setInterval(() => {
      var timeUntil = 60 - new Date().getMinutes();
      setStretch(() => timeUntil);
    }, 30000);
  };

  const handleClock = () => {
    var currentdate = new Date();
    var datetime =
      currentdate.getHours() +
      ":" +
      (currentdate.getMinutes() < 10 ? "0" : "") +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    setDate(() => datetime);
    setInterval(() => {
      var currentdate = new Date();
      var datetime =
        currentdate.getHours() +
        ":" +
        (currentdate.getMinutes() < 10 ? "0" : "") +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      setDate(() => datetime);
    }, 1000);
  };

  return buffer ? (
    <div className="App">
      <div className="item">TIME TO STRETCH</div>
      <img src={pic} style={{ width: "70px", padding: "20px" }}></img>
      <div className="item" style={{ fontSize: "1.3rem", fontStyle: "italic", padding: "5px" }}>
        every full hour
      </div>

      {letsGo ? (
        song ? (
          <Fragment>
            <div className="until" style={{ marginBottom: "35px", marginTop: "50px" }}>
              Let's Stretch!
            </div>
            <iframe
              src="https://giphy.com/embed/60wLzllpJn15e"
              width="430"
              height="310"
              style={{ pointerEvents: "none" }}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/stretching-xhDniL1GXz43u"></a>
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <div className="until">
              {" "}
              Next Stretch in <span style={{ color: "#05386b" }}>{stretch}</span> Minutes
            </div>
            {/* <div className="time">Time: {date}</div> */}
          </Fragment>
        )
      ) : (
        <button
          onClick={() => {
            handleAll();
          }}
          className={liClasses}
        >
          Begin
        </button>
      )}
    </div>
  ) : (
    <div className="loading">SONGS FOR STRETCHING ARE LOADING...</div>
  );
}

export default App;
