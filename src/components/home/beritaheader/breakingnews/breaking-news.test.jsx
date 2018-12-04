import React from 'react';
import ReactDOM from 'react-dom';
import BreakingNews from './breaking-news';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BreakingNews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
