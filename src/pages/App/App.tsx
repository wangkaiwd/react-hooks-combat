import useRequest from '../../hooks/useRequest';
import { fetchPost } from '../../api/posts';
import { List } from 'antd';
import { useEffect } from 'react';

// TODO: Why app update five times
function App () {
  const { data, loading, request } = useRequest(fetchPost);
  console.log('data', data);
  useEffect(() => {
    request().then(null);
  }, []);

  return (
    <>
      <List
        loading={loading}
        bordered
        dataSource={data}
        renderItem={(item: any) => <List.Item>{item.title}</List.Item>}
      />
    </>
  );
}

export default App;