import ReactDOM from 'react-dom';
import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: Math.floor(Math.random() * 360),
    };
  }

  render() {
    const { hue } = this.state;

    const base = `hsl(${hue}, 26%, 40%)`;
    const lighter = `hsl(${hue}, 26%, 55%)`;

    const baseTextColor = {
      color: base,
    };

    const lightTextColor = {
      color: lighter,
    };

    const baseBackgroundColor = {
      backgroundColor: base,
    };

    const lightBackgroundColor = {
      backgroundColor: lighter,
    };

    return (
      <div className="r">
        <h1 style={baseTextColor}>bitti.io</h1>
        <div className="q t-l">
          <div className="bw">
            <div className="t" style={baseTextColor}>about</div>
            <div className="b" style={baseBackgroundColor}>&#xE88F;</div>
          </div>
        </div>
        <div className="q t-r">
          <div className="bw">
            <div className="t" style={lightTextColor}>things</div>
            <div className="b" style={lightBackgroundColor}>&#xE1BD;</div>
          </div>
        </div>
        <div className="q b-l">
          <div className="bw">
            <div className="b" style={lightBackgroundColor}>&#xE80D;</div>
            <div className="t" style={lightTextColor}>kinko</div>
          </div>
        </div>
        <div className="q b-r">
          <div className="bw">
            <div className="b" style={baseBackgroundColor}>&#xE023;</div>
            <div className="t" style={baseTextColor}>audio</div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.createElement('div');
rootElement.classList.toggle('r', true);
document.body.appendChild(rootElement);

ReactDOM.render(<Root />, rootElement);
