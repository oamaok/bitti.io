import ReactDOM from 'react-dom';
import React from 'react';

import Box from './Box';
import AudioPlayer from './AudioPlayer';

const ABOUT_BOX = Symbol('about');
const THINGS_BOX = Symbol('things');
const AUDIO_BOX = Symbol('audio');

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: Math.floor(Math.random() * 360),
      activeBox: '',
    };
  }

  setActive = (box) => {
    this.setState({
      activeBox: box,
    });
  }

  handleBackgroundClick = (evt) => {
    if (evt.target.className.startsWith('quad')) {
      this.setState({
        activeBox: '',
      });
    }
  }

  randomColor = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
    });
  }

  goTo = (url) => {
    document.location = url;
  }

  render() {
    const { hue, activeBox } = this.state;

    const base = `hsl(${hue}, 26%, 40%)`;
    const lighter = `hsl(${hue}, 26%, 55%)`;

    const className = [ABOUT_BOX, THINGS_BOX].includes(activeBox) ? 'root active-box' : 'root';

    return (
      <div
        className={className}
        onClick={this.handleBackgroundClick}
      >
        <h1 style={{ color: base }}>bitti.io</h1>
        <div className="quad top-left">
          <Box
            onClick={() => this.setActive(ABOUT_BOX)}
            title="about"
            icon="&#xE88F;"
            color={base}
            active={activeBox === ABOUT_BOX}
          >
            <div className="content">
              <p>hello.</p>
              <p>my name is teemu. i&apos;m a software developer from finland.</p>
              <p>this is my personal website. i put stuff here. sometimes.</p>
              <ul>
                <li>
                  <a
                    href="https://github.com/oamaok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >github</a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/oamaok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >twitter</a>
                </li>
                <li>
                  <a
                    href="https://steamcommunity.com/id/oamaok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >steam</a>
                </li>
                <li>
                  <a
                    href="mailto:oamaok@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >email</a>
                </li>
              </ul>
            </div>
          </Box>
        </div>
        <div className="quad top-right">
          <Box
            onClick={() => this.setActive(THINGS_BOX)}
            title="things"
            icon="&#xE1BD;"
            color={lighter}
            active={activeBox === THINGS_BOX}
          >

            <div className="content">
              <p>
                <a
                  href="https://osu.bitti.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >oppai-web</a> &mdash;  online osu! pp calculator
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/ezpp/aimihpobjpagjiakhcpijibnaafdniol"
                  target="_blank"
                  rel="noopener noreferrer"
                >ezpp!</a> &mdash; browser extension for calculating osu! pp
              </p>
            </div>
          </Box>
        </div>
        <div className="quad bottom-left">
          <Box
            onClick={() => this.setActive(AUDIO_BOX)}
            title="audio"
            icon="&#xE023;"
            color={lighter}
            active={activeBox === AUDIO_BOX}
            bottom
          >
            <AudioPlayer colors={[base, lighter]} />
          </Box>
        </div>
        <div className="quad bottom-right">
          <Box
            title="tbd"
            icon="&#xE8FD;"
            color={base}
            bottom
          />
          <button style={{ color: base }} onClick={this.randomColor}>
            another color!
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.createElement('div');
rootElement.classList.toggle('root', true);
document.body.appendChild(rootElement);

ReactDOM.render(<Root />, rootElement);
