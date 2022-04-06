import { useState } from 'react';

type Fetch = (...args: any[]) => Promise<any>
type Status = 'init' | 'error' | 'success'

interface IState {
  data: any
  status: Status;
  loading: boolean,
}

const useRequest = (fetch: Fetch) => {
  const [state, setState] = useState<IState>({ data: undefined, loading: false, status: 'init' });
  const request = (...args: any[]) => {
    setState({ ...state, loading: true });
    return fetch(...args)
      .then((res) => {
        // render is sync ?
        setState({ loading: false, data: res, status: 'success' });
      })
      .catch(() => {
        setState({ ...state, loading: false, status: 'error' });
      });
  };
  return { ...state, request };
};

export default useRequest;
