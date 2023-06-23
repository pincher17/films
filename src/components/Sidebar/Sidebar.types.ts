import { ReactNode } from "react"

export interface SidebarContainerProps {
    isOpen: boolean
}

export interface SidebarProps {
    isOpenSidebar: boolean
    toggleSidebar: () => void
    children: ReactNode
}

