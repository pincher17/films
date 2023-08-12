import styled from "styled-components";
import { IframeProps } from "./Iframe.types";

export const Wrapper = styled.div`
  z-index: 1;
`;
export const WrapperInfo = styled.div`
    @media (max-width: 1150px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (max-width: 850px){
    display: initial;
  }
`;
export const WrapperWatchFilm = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1150px){
    display: initial;
    position: initial;
    margin-right: 30px;
    & > div{
        margin-bottom: 40px;
    }
  }
`;
export const Name = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  margin: 0;
`;
export const Flex = styled.div`
  display: flex;
  @media (max-width: 850px){
    flex-wrap: wrap;
  }
`;
export const NameTitle = styled.p`
  color: rgba(255, 255, 255, 0.514);
  font-size: 20px;
`;
export const TextValue = styled.p`
  font-size: 20px;
`;
export const ValueTextSpan = styled.span`
  font-size: 20px;
`;
export const MarginTopTitle = styled(NameTitle)`
  margin-top: -8px;
`;
export const MarginTopValue = styled(TextValue)`
  margin-top: -8px;
`;
export const Img = styled.div`
  margin-right: 5px;
`;
export const PositionAbsolute = styled.div`
  position: absolute;
`;
export const Film = styled.div`
  position: absolute !important;
  width: 70% !important;
  height: 100% !important;
`;
export const iframe = styled.div`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
`;
export const TitleDescription = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
export const Description = styled.p`
  margin-top: 15px;
  font-size: 18px;
  margin-bottom: 50px;
  @media (max-width: 1150px){
    height: 249px;
    overflow-y: scroll;
    width: 100%;
  }
`;
export const SwiperWrapperSimilar = styled.div`
   @media (max-width: 1150px){
    margin-top: 565px;
  }
`;


export const Iframe = styled.iframe<IframeProps>`
 width: 71% !important;
 @media (min-width: 1500px){
  width: 75% !important;
  }
  @media (max-width: 1300px){
  width: 70% !important;
  }
 @media (max-width: 1150px){
  height: 500px !important;
  width: 75% !important;
  }
  @media (max-width: 1030px){
  height: 500px !important;
  width: 85% !important;
  }
`