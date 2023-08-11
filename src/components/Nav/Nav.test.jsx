import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

it('should display number passed as props', () => {
  render(
    <MemoryRouter>
      <Nav cartItems={5} />
    </MemoryRouter>
  );

  const display = screen.getByTestId('cart');

  expect(display.textContent).toMatch('5');
});
