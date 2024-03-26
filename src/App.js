import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Menu from './Menu';
import TimerContext from './TimerContext';
import { useState } from 'react';

function App() {
  const [minutes, setMinutes] = useState(0);

  return (
    <div id="App">
      <TimerContext.Provider value={{
        minutes, setMinutes,
      }}>
        <Menu />
        <Timer /></TimerContext.Provider>
    </div>
  );
}

export default App;
