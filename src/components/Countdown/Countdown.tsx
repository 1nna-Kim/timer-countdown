import { Box, Typography } from '@mui/material';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import { useEffect, useState, useMemo, useCallback } from 'react';
import ButtonsComponents from '../ButtonsComponents';
import CountdownInputTime from './CountdownInputTime';
import CircularProgressWithLabel from './CircularWithValueLabel';
import CustomButton from '../CustomButton';

export default function Countdown() {
  const [initialTime, setInitialTime] = useState(0); //начальное время для расчета % оставшегося времени
  const [remainingTime, setRemainingTime] = useState(0); //оставшееся время
  const [time, setTime] = useState(0); // время, заданное пользователем
  const [isRunning, setIsRunning] = useState(false); // вкл/выкл таймер
  const [isSignalPlaying, setIsSignalPlaying] = useState(false);

  const timerSignal = useMemo(() => new Audio('/timerSignal.mp3'), []);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      setTime(0);
      timerSignal.play();
      setIsSignalPlaying(true);
    }
  }, [isRunning, remainingTime, timerSignal]);

  const turnOffTimerSignal = useCallback(() => {
    timerSignal.pause();
    timerSignal.currentTime = 0;
    setIsSignalPlaying(false);
  }, [timerSignal]);

  useEffect(() => {
    if (!isRunning && time !== initialTime) {
      setRemainingTime(time);
      setInitialTime(time);
    }
  }, [time, initialTime, isRunning]);

  const startCountdown = useCallback(() => {
    if (time > 0 && !isRunning) {
      setIsRunning(true);
    }
  }, [time, isRunning]);

  const stopCountdown = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetCountdown = useCallback(() => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
    setInitialTime(0);
  }, []);

  const progress = initialTime ? (remainingTime / initialTime) * 100 : 0;

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;
    return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  }, [remainingTime]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <CountdownInputTime time={time} setTime={setTime} disabled={isRunning} />
      <Typography variant='h2'>{formattedTime}</Typography>
      <CircularProgressWithLabel value={progress} />
      <ButtonsComponents
        isRunning={isRunning}
        onClickStart={startCountdown}
        onClickStop={stopCountdown}
        onClickReset={resetCountdown}
      />
      {isSignalPlaying && (
        <CustomButton onClick={turnOffTimerSignal}>
          <AlarmOffIcon sx={{ marginRight: '0.5rem' }} /> Выключить таймер
        </CustomButton>
      )}
    </Box>
  );
}
