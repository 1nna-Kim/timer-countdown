import { Typography } from '@mui/material';
import { CSSProperties } from 'react';
import PropTypes from 'prop-types';

interface IHeaderComponentsStyles extends Pick<CSSProperties, 'color' | 'position'> {}

interface IHeaderCopmonets {
  mode: 'timer' | 'countdown';
  sx?: IHeaderComponentsStyles;
}

function HeaderComponets({ mode, sx = {}, ...props }: IHeaderCopmonets) {
  return (
    <Typography variant='h1' sx={{ ...sx }} {...props}>
      {mode === 'timer' && 'Секундомер'}
      {mode === 'countdown' && 'Таймер'}
    </Typography>
  );
}

HeaderComponets.propTypes = {
  sx: PropTypes.object,
};

export default HeaderComponets;
