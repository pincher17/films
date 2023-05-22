import styled from 'styled-components'
import { FiltersProps } from './Filters.types'

export const Wrapper = styled.div<FiltersProps>`
 margin-bottom: 50px;
`
export const WrapperInput = styled.div`
  padding-bottom: 55px;
`

export const WrapperAllInputs = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1150px){
    flex-direction: column;
    align-items: flex-start;
    gap: 43px;
  }
`

export const WrapperCheckbox = styled.div`
 display: flex;
 display: flex;
 flex-direction: column;
 gap: 20px;
`

export const ButtonWrapper = styled.div`
 
`