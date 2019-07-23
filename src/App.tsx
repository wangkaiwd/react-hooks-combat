import React, { useEffect } from 'react';
import useRequest from '@/http/useRequest';
import { fetchDemo } from '@/api';

interface Props {

}

const App: React.FC<Props> = () => {
  const [{ isLoading, data, error }] = useRequest(fetchDemo);
  const [{ isLoading1, data1, error1 }, changeDoFetch] = useRequest(fetchDemo, {}, 'manual');
  console.log('fetch', isLoading, data, error);
  useEffect(() => {
    console.log('data1', data1);
  }, [data1]);
  return (
    <div>
      {
        isLoading ? 'loading' : undefined
      }
      <button onClick={() => {
        console.log('click');
        changeDoFetch();
      }}>
        click
      </button>
      <div>
        {
          isLoading1 ? <h3>loading...</h3> : <h1>加载完成</h1>
        }
      </div>
    </div>
  );
};

export default App;
