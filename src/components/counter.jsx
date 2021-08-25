import React from 'react';

const Counter = ({value, id, name, onIncrement, onDecrement, onDelete}) => {
  return (
      <>
        <h4>{name}</h4>
        <span className={`badge m-2 ${value === 0 ? 'bg-danger' : 'bg-primary'}`}>
          {value === 0 ? 'Ноль' : value}
        </span>
        <button
            className='btn btn-secondary btn-sm'
            style={{marginRight: '0.5rem'}}
            onClick={onIncrement.bind(null, id)}
        >
          Increment
        </button>
        <button
            className='btn btn-secondary btn-sm'
            onClick={onDecrement.bind(null, id)}
        >
          Decrement
        </button>
        <button
            className='btn btn-danger btn-sm m-2'
            onClick={onDelete.bind(null, id)}
        >
          Delete
        </button>
      </>
  );
};

export default Counter;
