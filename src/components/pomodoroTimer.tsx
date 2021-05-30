import React, { useEffect, useCallback } from 'react';
import Button from './Button';
import Timer from './Timer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';
interface IPomodoroTimerProps {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const getDefaultNumberOfCycles = (num: number): number => num - 1;

function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [cycles, setCycles] = React.useState(
    getDefaultNumberOfCycles(props.cycles),
  );

  const [completedCycles, setCompletedCycles] = React.useState(0);
  const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const handleStartWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);

    setMainTime(props.defaultPomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setMainTime,
    setResting,
    props.defaultPomodoroTime,
  ]);

  const handleStartRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) setMainTime(props.longRestTime);
      else setMainTime(props.shortRestTime);

      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');

    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cycles > 0) {
      handleStartRest(false);
      setCycles(cycles - 1);
    } else if (working && cycles <= 0) {
      handleStartRest(true);
      setCycles(getDefaultNumberOfCycles(props.cycles));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) handleStartWork();
  }, [
    working,
    resting,
    mainTime,
    cycles,
    numberOfPomodoros,
    completedCycles,
    props.cycles,
    setNumberOfPomodoros,
    handleStartRest,
    handleStartWork,
    setCycles,
  ]);

  return (
    <div id="pomodoro">
      <h2>You are: {working ? 'Working' : 'Resting'}</h2>
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
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
