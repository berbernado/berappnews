import React from 'react';
import ReactDOM from 'react-dom';
import HeaderLink from './HeaderLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});
