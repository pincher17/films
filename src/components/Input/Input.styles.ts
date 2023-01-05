import styled from 'styled-components'

import { StyledInputProps, StyledTooltipProps } from './Input.types'

export const InputWrapper = styled.div<StyledInputProps>`
  position: relative;
  & > label {
    font-style: normal;
    line-height: 24px;
    color: #a2a5b6;
    display: block;
  }
  & > input,
  textarea {
    display: block;
    position: relative;
    width: 100%;
    margin-top: 14px;
    border-radius: 5px;
    height: 33px;
    border: 1px solid rgb(52 52 52);
    font-family: Oswald;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    box-sizing: border-box;
    padding-left: 16px;
    background-color: #0e0e0e;
    color: white;
    &:hover {
      border-color: #747474;
    }
    &:focus {
      border-color: #747474;
    }
    &:focus-visible {
      outline: none;
    }
  }
  & > textarea {
    height: 406px;
  }
  & > span {
    display: inline-block;
    cursor: pointer;
    width: 22px;
    height: 19px;
    position: absolute;
    right: 33px;
    top: 57px;
    color: #21bdcb;
  }
  & > p {
    color: ${(props) => props.error && '#FF3232'};
  }
`

export const Tooltip = styled.div<StyledTooltipProps>`
  display: ${(props) => !props.tooltip && 'none'};
  width: 280px;
  background-color: #fff;
  position: absolute;
  left: 105%;
  top: -14px;
  padding: 20px;
  border: 1px solid #21bdcb;
  border-radius: 8px;
  box-shadow: 0px 4px 40px rgba(33, 189, 203, 0.1);
  font-weight: 300;
  line-height: 30px;
  @media screen and (max-width: 990px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    top: 40%;
    left: -31px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent #21bdcb transparent transparent;
    @media screen and (max-width: 990px) {
      left: 50%;
      top: 100%;
      transform: translateX(-50%) rotate(-90deg);
    }
  }
  &::after {
    left: -30px;
    border-color: transparent #fff transparent transparent;
    @media screen and (max-width: 990px) {
      left: 50%;
      top: calc(100% - 1px);
    }
  }
`
