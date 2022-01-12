import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const homeElements = await screen.findAllByText('Home');
  expect(homeElements.length).toBe(2);
});
