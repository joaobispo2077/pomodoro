import React from 'react';
import { secondsToTime } from '../utils/secondsToTime';

export interface ITimerProps {
  mainTime: number;
}

function Timer({ mainTime }: ITimerProps): JSX.Element {
  return <section className="timer">{secondsToTime(mainTime)}</section>;
}

export default Timer;
