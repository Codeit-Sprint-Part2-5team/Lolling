import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';

const ArrowButton = ({ direction, onClick, className }) => {
  const iconSrc = direction === 'left' ? arrowLeftIcon : arrowRightIcon;

  const handleClick = () => {
    if (onClick) {
      onClick(direction);
    }
  };

  return (
    <StyledArrowButton
      className={className}
      src={iconSrc}
      alt={`${direction} arrow`}
      onClick={handleClick}
    />
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string, 
};

const StyledArrowButton = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
`;

export default ArrowButton;