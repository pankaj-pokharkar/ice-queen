import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  icon: IconProp;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  size?: SizeProp;
  disabledIcon?: boolean;
}

const Button = styled.button`
  background: none;
  border: none;
  color: inherit;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
const IconButton = ({ icon, onClickHandler=()=>{}, tooltip="", size="2x", disabledIcon=false }: IconButtonProps) => {
  return (
    <Button title={tooltip} onClick={onClickHandler} disabled={disabledIcon}>
      <FontAwesomeIcon icon={icon} size={size} />
    </Button>
  )
}

export default IconButton;