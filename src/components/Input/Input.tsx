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
    onBlur,
    onFocus,
    error,
  } = props
  return (
    <InputWrapper error={error} type={type}>
      <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
    </InputWrapper>
  )
}

export default Input
