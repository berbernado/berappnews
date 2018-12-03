import React from 'react';
import ReactDOM from 'react-dom';
import HeaderAtas from './HeaderAtas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderAtas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
