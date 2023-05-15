import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 90px;
`
export const WrapperNameBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`
export const NameBlock = styled.p`
  font-size: 20px;
  font-weight: bold;
`
export const FilterIcon = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  height: 35px;
  width: 35px;
  background-size: 100%;
  align-self: center;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (min-width: 1151px){
   display: none;
  }
`
export const Button = styled.div`
  background-color: rgb(184, 22, 22);
  color:rgb(235, 235, 235);
  font-weight:500;
  font-size: 18px;
  padding: 8px 15px 8px 15px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgb(184, 22, 22);
  border-radius: 5px;
 
`
export const WrapperButtonShowMore = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
 
`