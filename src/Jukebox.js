import React, { Component } from "react";
import AudioPlayer from "./AudioPlayer";

class Jukebox extends Component {
  state = {
    song: "",
  };

  chooseSong = (song) => {
    this.setState({ song: song });
  };

  render() {
    return (
      <div>
        <h1>Jukebox</h1>
        <p>
          <button onClick={() => this.chooseSong("")}>Disable Audio</button>
        </p>
        <span>Play song: </span>
        <button onClick={() => this.chooseSong("/songs/fantasy-classical.mp3")}>
          Fantasy Classical
        </button>
        <button onClick={() => this.chooseSong("/songs/gates-of-heaven.mp3")}>
          Gates of Heaven
        </button>
        <button onClick={() => this.chooseSong("/songs/grand-orchestra.mp3")}>
          Grand Orchestra
        </button>
        <button onClick={() => this.chooseSong("/songs/piano-song.mp3")}>
          Piano Song
        </button>

        {this.state.song === "" ? (
          <p>Audio disabled</p>
        ) : (
          <AudioPlayer audioURL={this.state.song} />
        )}
      </div>
    );
  }
}

export default Jukebox;
