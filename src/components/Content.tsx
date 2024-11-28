import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import HeaderComponets from './HeaderComponets';
import Timer from './Timer/Timer';
import Countdown from './Countdown/Countdown';

interface IContent {
  mode: 'timer' | 'countdown';
}

function Content({ mode }: IContent) {
  return (
    <Box
      sx={{
        height: '70%',
        minWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem',
        boxShadow: '0 0 8px 3px rgba(0,0,0,0.2)',
        bgcolor: 'secondary.main',
      }}
    >
      <HeaderComponets mode={mode} sx={{ color: 'secondary.contrastText' }} />
      {mode === 'timer' && <Timer />}
      {mode === 'countdown' && <Countdown />}
    </Box>
  );
}

Content.propTypes = {
  mode: PropTypes.oneOf(['timer', 'countdown']),
};

export default Content;
