import React from 'react'
import Button from '../button'
import Input from '../input'
import { StyledForm } from './form'

const Form = () => {
  return (
    <StyledForm>
        <Input/>
        <Button type={'submit'}>Pesquisar</Button>
    </StyledForm>
  )
}

export default Form