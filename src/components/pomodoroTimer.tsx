import React from 'react';
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

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div id="pomodoro">
      <h2>You are working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button
          text="Start"
          onClick={() => console.log('Hello')}
          className="abc"
        />
        <Button
          text="Start"
          onClick={() => console.log('Hello')}
          className="abc"
        />
        <Button
          text="Start"
          onClick={() => console.log('Hello')}
          className="abc"
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
