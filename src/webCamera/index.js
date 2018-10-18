import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class WebCamera extends Component {
  state = {
    streamAvailable: '',
  }

  componentDidMount() {
    function hasGetUserMedia() {
      return !!(navigator.mediaDevices
        && navigator.mediaDevices.getUserMedia);
    }

    if (hasGetUserMedia()) {
      this.constraints = {
        video:
        { width: { exact: 640 }, height: { exact: 480 } },
      };
      this.video = document.querySelector('video');
    } else {
      console.log('getUserMedia() is not supported by your browser');
    }
  }

  /* Function to handle the start button for webCam stream */
  handleStart = () => {
    const constraints = {
      video:
      { width: { exact: 640 }, height: { exact: 480 } },
    };
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream;
        this.setState({ streamAvailable: stream });
      });
  }

  /* Function to handle the stop button for webCam stream */
  handleStop = () => {
    const { streamAvailable } = this.state;
    if (streamAvailable) {
      streamAvailable.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handleStart}>
            Start
          </Button>
          <Button onClick={this.handleStop}>
            Stop
          </Button>
        </div>
        <video muted autoPlay />
      </div>
    );
  }
}

export default WebCamera;
