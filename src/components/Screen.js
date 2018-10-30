import React from 'react';

import Board from './Board';

const Screen = () => (
  <div style={{
    width: '100vw',
    height: '100vh',
    background: 'darkgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Board />
  </div>
);

export default Screen;
