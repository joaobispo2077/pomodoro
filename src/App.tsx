import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        defaultPomodoroTime={10} //1500
        shortRestTime={2} //300
        longRestTime={5} //900
        cycles={4}
      />
    </div>
  );
}

export default App;
