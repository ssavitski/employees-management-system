import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders apps title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Employees management/i);
  expect(linkElement).toBeInTheDocument();
});
