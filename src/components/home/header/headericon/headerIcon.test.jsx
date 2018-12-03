import React from 'react';
import ReactDOM from 'react-dom';
import HeaderIcon from './HeaderIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
