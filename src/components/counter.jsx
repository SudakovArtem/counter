import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  return (
      <>
        <span
            className={`badge m-2 ${count === 0 ? 'bg-danger' : 'bg-primary'}`}
        >
          {count === 0 ? 'Ноль' : count}
        </span>
        <button
            className='btn btn-secondary btn-sm'
            style={{marginRight: '0.5rem'}}
            onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
            className='btn btn-secondary btn-sm'
            onClick={() => count > 0 && setCount(count - 1)}
        >
          Decrement
        </button>
      </>
  );
}

export default Counter;
