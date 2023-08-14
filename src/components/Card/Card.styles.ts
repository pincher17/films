import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const ImgWrapper = styled.div`
  position: relative;
`

export const Img = styled.img`
  position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  border-radius: 15px;
  background-color: #424242;
`

export const Rating = styled.div`
  width: 44px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(59,179,59);
  border-radius: 15px;
  position: absolute;
  top: 5px;
  left: 5px;
`
export const RatingNum = styled.span`
  color: white;
  font-weight: 800;
`
export const Year = styled.div`
  margin-bottom: 55px;
  margin-top: -5px;
  color: #f8f8f8a6;;
`
export const ImgWrap = styled.div`
  position: relative;
  &::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 150%;
  }
  
`

