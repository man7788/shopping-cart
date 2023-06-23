import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

it('should invoke onClick event', async () => {
  const user = userEvent.setup();
  const mockFn = jest.fn();

  render(<Card setCartItems={mockFn} />);

  const target = screen.getAllByRole('button', { name: 'Add' });

  await user.click(target[0]);

  expect(mockFn).toHaveBeenCalled();
});

it.only('should display number in input field', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const target = screen.getAllByRole('spinbutton');

  await user.type(target[0], '12345');

  expect(target[0].value).toMatch('12345');
});

it('should reset input field to 0', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const button = screen.getAllByRole('button', { name: 'Add' });
  const input = screen.getAllByRole('spinbutton');

  await user.type(input[0], '12345');
  await user.click(button[0]);

  expect(input[0].value).toMatch('0');
});
