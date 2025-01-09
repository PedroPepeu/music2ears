import React from 'react';
import { useStore } from './useStore.ts';

function Counter() {
  const { count, increase, decrease } = useStore();

  return (
    <div className="flex justify-center items-center space-x-4">
      <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">
        Decrease
      </button>
      <span className="text-xl">{count}</span>
      <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded">
        Increase
      </button>
    </div>
  );
}

export default Counter;
