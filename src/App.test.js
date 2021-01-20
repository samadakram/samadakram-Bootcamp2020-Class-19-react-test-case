import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('heading h1', () => {
  render(<App />);
  const headingElement = screen.getByText(/world/i);
  expect(headingElement).toBeInTheDocument();
});