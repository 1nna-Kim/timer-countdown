import { Box, AppBar } from '@mui/material';
import CustomButton from './CustomButton';
import PropTypes from 'prop-types';

interface ITabMode {
  active: 'timer' | 'countdown';
  onChange: (mode: 'timer' | 'countdown') => void;
}

function TabMode({ active, onChange }: ITabMode) {
  return (
    <AppBar
      position='relative'
      sx={{
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)!important',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          padding: '1rem',
          backgroundColor: 'secondary.main',
        }}
      >
        <CustomButton isActive={active === 'timer'} sx={{ width: '45%' }} onClick={() => onChange('timer')}>
          Секундомер
        </CustomButton>
        <CustomButton isActive={active === 'countdown'} sx={{ width: '45%' }} onClick={() => onChange('countdown')}>
          Таймер
        </CustomButton>
      </Box>
    </AppBar>
  );
}

TabMode.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func,
};

export default TabMode;
