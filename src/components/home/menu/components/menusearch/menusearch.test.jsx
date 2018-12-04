import React from 'react';
import ReactDOM from 'react-dom';
import MenuSearch from './MenuSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
