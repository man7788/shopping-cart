import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

it('should invoke onClick event', async () => {
  const user = userEvent.setup();
  const mockFn = jest.fn();

  render(<Card setItem={mockFn} />);

  const target = screen.getByText('Item');

  await user.click(target);

  expect(mockFn).toHaveBeenCalled();
});
