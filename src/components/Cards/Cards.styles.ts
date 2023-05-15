import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-grid-column-gap: 21px;
  -moz-grid-column-gap: 21px;
  grid-column-gap: 21px;
  @media (min-width: 1301px) and (max-width: 1499px){
    -webkit-column-gap: 35px;
    -moz-column-gap: 35px;
    grid-column-gap: 35px;
  }

  @media (min-width: 1151px) and (max-width: 1300px){
    -webkit-column-gap: 54px;
    -moz-column-gap: 54px;
    grid-column-gap: 54px;
  }

  @media (max-width: 1150px){
   /*  -webkit-column-gap: 54px;
    -moz-column-gap: 54px;
    grid-column-gap: 54px; */
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
  }

  @media (max-width: 738px){
   /*  -webkit-column-gap: 54px;
    -moz-column-gap: 54px;
    grid-column-gap: 54px; */
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-items: center;
  }

  @media (min-width: 1500px){
    -webkit-column-gap: 21px;
    -moz-column-gap: 21px;
    grid-column-gap: 21px;
  }
`
