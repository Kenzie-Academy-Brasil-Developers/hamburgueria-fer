import React from 'react'
import { StyledHeader } from './header'
import Logo from '../../assets/logo.svg'
import Form from '../form'

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo" />
      <Form/>
      

    </StyledHeader>
  )
}

export default Header