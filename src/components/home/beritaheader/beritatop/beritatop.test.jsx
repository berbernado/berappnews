import React from 'react';
import ReactDOM from 'react-dom';
import BeritaTop from './BeritaTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeritaTop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
