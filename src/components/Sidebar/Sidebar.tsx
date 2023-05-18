import React, { useState } from "react";
import { SidebarButton, SidebarContainer, SidebarContent } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";


const Sidebar: React.FC<SidebarProps> = ({isOpenSidebar, toggleSidebar}) => {


  return (
    <>
    <SidebarButton onClick={toggleSidebar}>Toggle Sidebar</SidebarButton>
    <SidebarContainer isOpen={isOpenSidebar}>
      <SidebarContent>
        <h1>Sidebar Content</h1>
        <p>This is the sidebar menu.</p>
        <SidebarButton onClick={toggleSidebar}>Close</SidebarButton>
      </SidebarContent>
    </SidebarContainer>
  </>
  )
  }
export default Sidebar;
