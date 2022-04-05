import { fireEvent, screen, render } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('should increase when click button', () => {
    const { container } = render(<Counter/>);
    const h2 = container.querySelector('h2');
    fireEvent.click(screen.getByTestId('button'));
    expect(h2?.innerHTML).toBe('1');
  });
});
