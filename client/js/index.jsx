import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

function Box({ title, bottom, icon, color, onClick, active, children }) {
  const content = [
    <div key="title" className="title" style={{ color }}>{title}</div>,
    <div key="box" className="box" style={{ backgroundColor: color }}>
      <div className="icon">{icon}</div>
      <div className="content">{children}</div>
    </div>,
  ];

  const className = active === title ? 'box-wrapper active' : 'box-wrapper';

  return (
    <div className={className} onClick={onClick}>
      {bottom ? content.reverse() : content }
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  bottom: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  bottom: false,
  children: null,
  onClick: () => {},
};

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: Math.floor(Math.random() * 360),
      activeBox: '',
    };
  }

  toggleBox = (box) => {
    this.setState({
      activeBox: this.state.activeBox === box ? '' : box,
    });
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

    const className = activeBox ? 'root active-box' : 'root';

    return (
      <div className={className}>
        <h1 style={{ color: base }}>bitti.io</h1>
        <div className="quad top-left">
          <Box
            onClick={() => this.toggleBox('about')}
            title="about"
            icon="&#xE88F;"
            color={base}
            active={activeBox}
          >
            <p>hello.</p>
            <p>i am teemu, a software developer from finland.</p>
            <p>this is my website. i put stuff here. sometimes.</p>
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
          </Box>
        </div>
        <div className="quad top-right">
          <Box
            onClick={() => this.toggleBox('things')}
            title="things"
            icon="&#xE1BD;"
            color={lighter}
            active={activeBox}
          >
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
          </Box>
        </div>
        <div className="quad bottom-left">
          <Box
            onClick={() => this.goTo('https://audio.bitti.io')}
            title="audio"
            icon="&#xE023;"
            color={lighter}
            bottom
          />
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
