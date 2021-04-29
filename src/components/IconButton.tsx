import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IconButtonProps {
  icon: IconProp;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ icon, onClickHandler }: IconButtonProps) => {
  return (
    <button className="icon-button" onClick={onClickHandler}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  )
}

export default IconButton;