import styled from "styled-components";

export const FooterWrap = styled.footer`
  height: 60px;
  margin-top: -60px;
  background-color: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px){
    padding-bottom: 60px;
  }
  & > a:hover{
    color: #d32a29;
  }
  & > a{
    cursor: pointer;
    margin-left: 5px;
    text-decoration: underline;
  }
`;
