import React from 'react';
import PropTypes from 'prop-types';
import { ButtonThumb, ButtonWrapper } from './Button.styled';

const Button = ({ onFollow, follow }) => {
  const buttonColor = { backgroundColor: '#5CD3A8' };
  return (
    <>
      <ButtonThumb>
        <ButtonWrapper style={follow ? buttonColor : null} onClick={onFollow}>
          {follow ? 'FOLLOWING' : 'FOLLOW'}
        </ButtonWrapper>
      </ButtonThumb>
    </>
  );
};

export { Button };

Button.propTypes = {
  follow: PropTypes.bool.isRequired,
  onFollow: PropTypes.func.isRequired,
};
