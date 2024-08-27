import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRequest } from './store/dataSlice';

function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Data Visualization</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="p-4 border rounded shadow-sm bg-gray-100">
            {item.title}
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
