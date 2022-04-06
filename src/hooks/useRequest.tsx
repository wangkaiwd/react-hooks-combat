import { useState } from 'react';

type Fetch = (...args: any[]) => Promise<any>
type Status = 'init' | 'error' | 'success'

interface IState {
  data: any
  status: Status;
  loading: boolean,
}

const useRequest = (fetchCreator: Fetch) => {
  const [state, setState] = useState<IState>({ data: undefined, loading: false, status: 'init' });
  const fetch = (...args: any[]) => {
    setState((state) => ({ ...state, loading: true }));
    return fetchCreator(...args)
      .then((res) => {
        setState({ loading: false, data: res, status: 'success' });
      })
      .catch(() => {
        setState((state) => ({ ...state, loading: false, status: 'error' }));
      });
  };
  return { ...state, fetch };
};

export default useRequest;
