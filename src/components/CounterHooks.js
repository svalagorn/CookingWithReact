import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';

export default function CounterHooks({ initialCount }) {
  //props deconstructed
  const [count, setCount] = useState(initialCount); //useState returns an array with two elements
  //useState låter oss bryta upp state i multipla variabler
  const style = useContext(ThemeContext);

  return (
    <>
      <div>
        <button
          style={style}
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <span>{count}</span>
        <button
          style={style}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
