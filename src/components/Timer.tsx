import React from 'react';
import { secondsToMinutes } from '../utils/secondsToMinutes';

export interface ITimerProps {
  mainTime: number;
}

function Timer({ mainTime }: ITimerProps): JSX.Element {
  return <section className="timer">{secondsToMinutes(mainTime)}</section>;
}

export default Timer;
