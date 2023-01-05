import React from 'react'
import { InputWrapper } from './Input.styles'
import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
  } = props
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
    </InputWrapper>
  )
}

export default Input
