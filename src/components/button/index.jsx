import React from 'react'
import { StyledButton } from './button'


const Button = ({children, background, type}) => {
  return (
    <>
    <StyledButton type={type} background={background}>{children}</StyledButton>
    </>
  )
}

export default Button