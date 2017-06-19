import PropTypes from 'prop-types';
import React from 'react';

function Box({ title, bottom, icon, color, onClick, active, children }) {
  const content = [
    <div key="title" className="title" style={{ color }}>{title}</div>,
    <div key="box" className="box" style={{ backgroundColor: color }}>
      <div className="icon">{icon}</div>
      <div className="content-wrapper">{children}</div>
    </div>,
  ];

  const className = active ? 'box-wrapper active' : 'box-wrapper';

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
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  bottom: false,
  children: null,
  active: false,
  onClick: () => {},
};

export default Box;
