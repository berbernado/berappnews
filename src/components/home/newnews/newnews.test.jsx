import React from 'react';
import ReactDOM from 'react-dom';
import NewNews from './NewNews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewNews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
