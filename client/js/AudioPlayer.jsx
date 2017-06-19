import React from 'react';
import { List, Record } from 'immutable';

const File = Record({
  name: '',
  filesize: 0,
  time: 0,
  current: 0,
  length: 0,
});

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: List(),
      current: -1,
    };

    this.audioElement = null;
  }

  componentDidMount() {
    fetch('/api/audio')
    .then(res => res.json())
    .then(files => this.setState({
      files: List(files).map(file => new File(file)),
    }));

    setInterval(this.updateTime, 100);
  }

  updateTime = () => {
    const { audioElement } = this;
    const { files, current } = this.state;

    if (audioElement && current !== -1) {
      const file = files.get(current);

      this.setState({
        files: files.set(current, file.set('current', audioElement.currentTime)),
      });
    }
  }

  playIndex = (index) => {
    const { audioElement } = this;

    if (audioElement) {
      const { files, current } = this.state;

      if (!audioElement.paused && index === this.state.current) {
        audioElement.pause();
        return;
      }

      if (index === this.state.current) {
        audioElement.play();
        return;
      }

      const prev = files.get(current);
      const file = files.get(index);

      this.setState({
        files: files.set(current, prev.set('current', 0)),
        current: index,
      });

      audioElement.src = `/api/audio/${file.name}`;
      audioElement.play();
    }
  }

  handleAudioEnd = () => {
    this.playIndex((this.state.current + 1) % this.state.files.size);
  }

  render() {
    const { files } = this.state;
    const { colors } = this.props;

    const [base] = colors;

    let isPlaying = false;

    const { audioElement } = this;

    if (audioElement) {
      isPlaying = !audioElement.paused;
    }

    const icon = index => (index === this.state.current && isPlaying ? '\uE034' : '\uE037');

    return (
      <div className="audio-player">
        <audio
          ref={(element) => { this.audioElement = element; }}
          onEnded={this.handleAudioEnd}
        />
        {files.map((file, index) => (
          <div className="file-wrapper" key={file.name}>
            <div className="file">
              <div
                className="control"
                onClick={() => this.playIndex(index)}
                style={{ backgroundColor: base }}
              >{icon(index)}</div>
              <div className="name">{file.name}</div>
              <div className="progress">
                <div
                  className="progress-inner"
                  style={{
                    width: `${(file.current / file.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
