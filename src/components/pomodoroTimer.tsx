import React, { useEffect } from 'react';
import Button from './Button';
import Timer from './Timer';

import { useInterval } from '../hooks/useInterval';
interface IPomodoroTimerProps {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');

    if (resting) document.body.classList.remove('working');
  }, [working, resting]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const handleStartWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setMainTime(props.defaultPomodoroTime);
  };

  const handleStartRest = (long: boolean) => {
    setTimeCounting(false);
    setWorking(false);
    setResting(true);

    if (long) setMainTime(props.longRestTime);
    else setMainTime(props.shortRestTime);
  };

  return (
    <div id="pomodoro">
      <h2>You are working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => handleStartWork()} className="abc" />
        <Button
          text="Rest"
          onClick={() => handleStartRest(false)}
          className="abc"
        />
        <Button
          text={timeCounting ? 'Pause' : 'Continue'}
          onClick={() => setTimeCounting(!timeCounting)}
          className={!working && !resting ? 'hidden' : ''}
        />
      </div>

      <div className="details">
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
