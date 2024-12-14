import Sidebar from "./Sidebar";

export type TContainerWrapperProps = {
    children: React.ReactNode
    isSidebarActive?: boolean
}

export default function ContainerWrapper({ children, isSidebarActive = true }: TContainerWrapperProps) {
    return <div className={`flex flex-row ${isSidebarActive ? 'bg-white dark:bg-gray-900 text-black dark:text-white' : ''}`}>
        {isSidebarActive && <Sidebar />}
        {children}
    </div>;
}
