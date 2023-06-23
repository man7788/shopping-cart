import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

xit('should display number passed as props', () => {
  // BrowserRouter for rendering <Link/> tag
  render(<Nav item={'5'} />, { wrapper: BrowserRouter });

  const display = screen.getByTestId('cart');

  expect(display.textContent).toMatch('5');
});
