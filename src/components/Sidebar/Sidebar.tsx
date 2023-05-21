import React, { useState } from "react";
import { SidebarButton, SidebarContainer, SidebarContent } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";


const Sidebar: React.FC<SidebarProps> = ({isOpenSidebar, toggleSidebar, children}) => {


  return (
    <>
    <SidebarContainer isOpen={isOpenSidebar}>
      <SidebarContent>
        {children}
      </SidebarContent>
    </SidebarContainer>
  </>
  )
  }
export default Sidebar;
