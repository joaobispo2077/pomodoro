import React from 'react';
import Button from '../components/Button';

import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';

interface IPomodoroTimerProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div id="pomodoro">
      <h2>You are working</h2>
      {/* secondsToTime(mainTime) */}
      <Button
        text="Start"
        onClick={() => console.log('Hello')}
        className="abc"
      />
    </div>
  );
}
