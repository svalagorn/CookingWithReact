import React, { useState } from 'react';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      ClassComponent
      <Counter initialCount={0} />
      FunctionComponent
      <CounterHooks initialCount={3} />
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === 'red' ? 'blue' : 'red'))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
