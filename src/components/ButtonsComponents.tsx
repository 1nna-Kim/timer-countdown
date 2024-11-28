import { Box } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

interface IButtonsComponents {
  isRunning: boolean;
  onClickStart: () => void;
  onClickStop: () => void;
  onClickReset: () => void;
}

function ButtonsComponents({ isRunning, onClickStart, onClickStop, onClickReset }: IButtonsComponents) {
  return (
    <Box sx={{ display: 'flex', gap: '3rem' }}>
      {isRunning ? (
        <CustomButton onClick={onClickStop}>
          <PauseCircleOutlineIcon sx={{ marginRight: '0.5rem' }} />
          Стоп
        </CustomButton>
      ) : (
        <CustomButton onClick={onClickStart}>
          <PlayCircleOutlineIcon sx={{ marginRight: '0.5rem' }} />
          Старт
        </CustomButton>
      )}

      <CustomButton onClick={onClickReset}>
        <RestartAltIcon sx={{ marginRight: '0.5rem' }} />
        Сброс
      </CustomButton>
    </Box>
  );
}

ButtonsComponents.propTypes = {
  isRunning: PropTypes.bool,
};

export default ButtonsComponents;
