import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search box', () => {
  render(<App />);
  const searchBoxElement = screen.getByPlaceholderText(/Type to Search.../i);
  expect(searchBoxElement).toBeInTheDocument();
});
