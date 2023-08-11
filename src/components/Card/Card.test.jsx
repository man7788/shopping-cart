import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Card from './Card';

it('should invoke onClick event', async () => {
  const user = userEvent.setup();
  const mockFn = vi.fn();

  render(<Card setCartItems={mockFn} />);

  const target = screen.getAllByRole('button', { name: 'Add To Cart' });

  await user.click(target[0]);

  expect(mockFn).toHaveBeenCalled();
});

it('should display number in input field', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const target = screen.getAllByRole('spinbutton');

  await user.type(target[0], '12345');

  expect(target[0].value).toMatch('12345');
});

it('should reset input field to 0', async () => {
  const user = userEvent.setup();
  const mockFn = vi.fn();

  render(<Card setCartItems={mockFn} />);

  const button = screen.getAllByRole('button', { name: 'Add To Cart' });
  const input = screen.getAllByRole('spinbutton');

  await user.type(input[0], '12345');
  await user.click(button[0]);

  expect(input[0].value).toMatch('0');
});

it('should add one to input field', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const add = screen.getAllByRole('button', { name: '+' });
  const input = screen.getAllByRole('spinbutton');

  await user.click(add[0]);

  expect(input[0].value).toMatch('1');
});

it('should minus one to input field if more than 1', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const minus = screen.getAllByRole('button', { name: '-' });
  const input = screen.getAllByRole('spinbutton');

  await user.type(input[0], '5');
  await user.click(minus[0]);

  expect(input[0].value).toMatch('4');
});

it('should not minus one to input field if it is 0', async () => {
  const user = userEvent.setup();

  render(<Card />);

  const minus = screen.getAllByRole('button', { name: '-' });
  const input = screen.getAllByRole('spinbutton');

  await user.click(minus[0]);

  expect(input[0].value).toMatch('0');
});
