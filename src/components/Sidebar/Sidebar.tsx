import React, { useState } from "react";
import { SidebarButton, SidebarContainer, SidebarContent, Title } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";


const Sidebar: React.FC<SidebarProps> = ({isOpenSidebar, toggleSidebar, children}) => {


  return (
    <>
    <SidebarContainer isOpen={isOpenSidebar}>
      <SidebarContent>
        <Title>Фильтры</Title>
        {children}
      </SidebarContent>
    </SidebarContainer>
  </>
  )
  }
export default Sidebar;
