import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  @media (min-width: 1301px) and (max-width: 1499px){
    column-gap: 35px;
  }

  @media (min-width: 1151px) and (max-width: 1300px){
    column-gap: 54px;
  }

  @media (max-width: 1150px){
    column-gap: 54px;
  }

  @media (min-width: 1500px){
    column-gap: 21px;
  }
`
