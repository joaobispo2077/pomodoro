import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        defaultPomodoroTime={6} //1500 25min
        shortRestTime={2} //300 5min
        longRestTime={3} //900 15min
        cycles={4}
      />
    </div>
  );
}

export default App;
