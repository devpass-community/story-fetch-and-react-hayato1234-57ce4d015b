import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';

test('it should render a quote when button is clicked', async () => {
  render(<App />)
  const button = screen.getByTestId('button')
  fireEvent.click(button)
  await waitFor(() => expect(screen.getByTestId('quote')).toBeDefined());
})
