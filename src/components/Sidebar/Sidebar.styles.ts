import styled from "styled-components";
import { SidebarContainerProps } from "./Sidebar.types";

export const SidebarContainer = styled.div<SidebarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
`;

export const SidebarButton = styled.button`
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;