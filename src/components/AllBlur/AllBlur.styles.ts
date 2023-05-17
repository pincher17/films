import styled from "styled-components";
import { SearchWrapperProps } from "./AllBlur.types";

export const AllBlurDiv = styled.div<SearchWrapperProps>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 120vw;
  height: 120vh;
  background-color: rgb(0 0 0 / 80%);
  -webkit-backdrop-filter: blur(35px);
  backdrop-filter: blur(35px);
  background: rgb(21 21 21 / 83%);
`;