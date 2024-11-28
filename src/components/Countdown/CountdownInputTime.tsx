import { Box, TextField, Slider } from '@mui/material';
import PropTypes from 'prop-types';

interface ICountdownInputTime {
  time: number;
  setTime: (time: number) => void;
  disabled: boolean;
}

function CountdownInputTime({ time, setTime, disabled }: ICountdownInputTime) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleSMinutsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 720);
    setTime(value * 60 + seconds);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 59);
    setTime(minutes * 60 + value);
  };

  const handleSliderChange = (_: Event, sliderTotalSeconds: number | number[]) => {
    setTime(sliderTotalSeconds as number);
  };

  const marks = [
    {
      value: 0,
      label: '0 мин',
    },
    {
      value: 3600,
      label: '60 мин',
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', gap: '3rem', width: '17rem' }}>
        <TextField
          value={minutes || ''}
          onChange={handleSMinutsChange}
          color='warning'
          label='Минуты'
          variant='outlined'
          type='number'
          disabled={disabled}
          focused
        />
        <TextField
          value={seconds || ''}
          onChange={handleSecondsChange}
          color='warning'
          label='Секунды'
          variant='outlined'
          type='number'
          disabled={disabled}
          focused
        />
      </Box>
      <Slider
        value={time}
        onChange={handleSliderChange}
        marks={marks}
        color='warning'
        min={0}
        max={3600}
        step={15}
        disabled={disabled}
      ></Slider>
    </>
  );
}

CountdownInputTime.propTypes = {
  time: PropTypes.number,
  setTime: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CountdownInputTime;
