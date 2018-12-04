import React from 'react';
import ReactDOM from 'react-dom';
import BeritaSlide from './BeritaSlide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeritaSlide />, div);
  ReactDOM.unmountComponentAtNode(div);
});
