import styled from "styled-components";
import { CrossIcon } from "../allFilmsPage/AllFilmsPage.styles";
import { IframeProps } from "../FilmPage/Iframe.types";
import { WrapperIframeMobileProps } from "./MobileWatchFilm.types";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  width: 140vw;
  height: 140vh;
  background-color: rgb(0 0 0 / 80%);
  -webkit-backdrop-filter: blur(35px);
  backdrop-filter: blur(35px);
  background: rgb(21 21 21 / 83%);
`;

export const CrossIconFilm = styled(CrossIcon)`
 right: auto;
 margin-left: 0;
 top: 3%;
    left: 62%;
`;

export const WrapperIframeMobile = styled.div<WrapperIframeMobileProps>`
  margin-top: 90px;
  margin-left: 7px;
`

export const Iframe = styled.iframe<IframeProps>`
    width: 70% !important;
    height: 62vh !important;
    top: 7%;
    left: 5px;
`