import React from 'react';
import ReactDOM from 'react-dom';
import MenuMobile from './MenuMobile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuMobile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
