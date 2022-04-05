import { useState } from 'react';

type Fetch = (...args: any[]) => Promise<any>
type Status = 'init' | 'error' | 'success'

const useRequest = (fetch: Fetch) => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>('init');
  const request = (...args: any[]) => {
    setLoading(true);
    return fetch(...args)
      .then((res) => {
        setStatus('success');
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setStatus('error');
        setLoading(false);
      });
  };
  return { data, loading, status, request };
};

export default useRequest;
