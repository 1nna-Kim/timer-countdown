import { Box, Typography } from '@mui/material';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ButtonsComponents from '../ButtonsComponents';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunnig] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // console.log('effect');
    if (isRunning) {
      intervalRef.current = window.setInterval(() => setTime(prevTime => prevTime + 10), 10);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startTimer = useCallback(() => setIsRunnig(true), []);

  const stopTimer = useCallback(() => setIsRunnig(false), []);

  const resetTimer = useCallback(() => {
    setIsRunnig(false);
    setTime(0);
  }, []);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:
    ${String(seconds).padStart(2, '0')}:
    ${String(milliseconds).padStart(2, '0')}`;
  }, [time]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <Typography variant='h2'>{formattedTime}</Typography>
      <ButtonsComponents
        isRunning={isRunning}
        onClickStart={startTimer}
        onClickStop={stopTimer}
        onClickReset={resetTimer}
      />
    </Box>
  );
}

export default Timer;
