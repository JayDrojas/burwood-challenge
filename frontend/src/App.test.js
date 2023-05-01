import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import UserInputForm from './components/UserInputForm';

test('renders initial load for fizzbuzz app', () => {
  render(<App />);
  const linkElement = screen.getByText('Leaderboard');
  expect(linkElement).toBeInTheDocument();
});

test('renders form and expects button to be disabled on initial render.', () => {
  render(<UserInputForm />)
  const button = screen.getByText('Submit')
  expect(button).toBeDisabled();
});

test('renders form and expects button to not be disabled after being typed.', () => {
  render(<UserInputForm />)
  const button = screen.getByText('Submit')

  const label = screen.getByLabelText('Input:')
  fireEvent.change(label, {target: {value: "10"}})
  expect(button).not.toBeDisabled();
});
