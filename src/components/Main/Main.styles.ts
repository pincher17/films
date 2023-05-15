import styled from 'styled-components'

export const MainTag = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  border: 1px solid rgba(255, 0, 0, 0);

  @media (max-width: 1500px){
    max-width: 1250px;
  }
  @media (max-width: 1300px){
    max-width: 1050px;
  }
  @media (max-width: 1150px){
    max-width: 774px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 738px){
    min-width: 464px;
    padding-left: 15px;
    padding-right: 15px;
  }
`
