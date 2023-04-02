import React from 'react';
import { ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.types';


const Button: React.FC<ButtonProps> = ({children, onClick}) =>{
    

    return (
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    )
}

export default Button;