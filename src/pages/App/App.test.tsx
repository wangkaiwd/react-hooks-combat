import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    const button = screen.getByText('click');
    fireEvent.click(button);
    expect(screen.getByTestId('count').innerHTML).toBe('1');
  });
});

