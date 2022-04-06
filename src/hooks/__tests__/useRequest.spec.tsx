import useRequest from '../useRequest';
import { render, waitFor } from '@testing-library/react';
import { useEffect, useMemo, useRef } from 'react';

describe('useRequest', () => {
  it('should generate loading and data', () => {
    const App = () => {
      const { data, loading, fetch } = useRequest(() => Promise.resolve({ a: 1, b: 2 }));
      useEffect(() => {
        fetch().then(null);
      }, []);
      return (
        <>
          {
            loading ?
              <div className="loading">loading</div>
              :
              <div className="a">{data && data.a}</div>
          }
        </>
      );
    };
    const { container } = render(<App/>);
    expect(container.querySelector('.loading')).toBeInTheDocument();
    waitFor(() => {
      expect(container.querySelector('.a')).toBe(1);
    });
  });
});
