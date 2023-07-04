import React, { Component } from "react";

class AudioPlayer extends Component {
  state = {
    status: "paused",
    currentTime: 0,
    duration: 0,
  };

  audioElement = new Audio();

  componentDidMount() {
    this.loadSong();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.audioURL !== this.props.audioURL) {
      this.stopSong();
      this.loadSong();
    }
  }

  componentWillUnmount() {
    this.stopSong();
  }

  loadSong = () => {
    this.audioElement.src = this.props.audioURL;
    this.audioElement.autoplay = true;
    this.audioElement.addEventListener("timeupdate", this.handleTimeUpdate);
    this.audioElement.addEventListener("ended", this.handleSongEnd);
    this.setState({ status: "playing" });
  };

  stopSong = () => {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.audioElement.removeEventListener("timeupdate", this.handleTimeUpdate);
    this.audioElement.removeEventListener("ended", this.handleSongEnd);
    this.setState({ status: "paused", currentTime: 0 });
  };

  handleTimeUpdate = () => {
    this.setState({ currentTime: this.audioElement.currentTime });
  };

  handleSongEnd = () => {
    this.stopSong();
  };

  togglePlay = () => {
    if (this.state.status === "playing") {
      this.audioElement.pause();
      this.setState({ status: "paused" });
    } else {
      this.audioElement.play();
      this.setState({ status: "playing" });
    }
  };

  render() {
    const { status, currentTime } = this.state;
    const { audioURL } = this.props;

    return (
      <div>
        <p>Playing {audioURL}</p>
        <p>Current Time: {currentTime.toFixed(2)}</p>
        <button onClick={this.togglePlay}>
          {status === "playing" ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default AudioPlayer;
