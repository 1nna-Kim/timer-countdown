import { Button } from '@mui/material';
import { CSSProperties } from 'react';
import PropTypes from 'prop-types';

interface ICustomButtonStyles extends Pick<CSSProperties, 'width' | 'fontWeight'> {}

interface ICustomButtom {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  sx?: ICustomButtonStyles;
}

function CustomButton({ children, isActive, sx = {}, ...props }: ICustomButtom) {
  return (
    <Button variant='contained' color={isActive ? 'success' : 'primary'} sx={{ ...sx, fontWeight: 'bold' }} {...props}>
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  sx: PropTypes.object,
};

export default CustomButton;
