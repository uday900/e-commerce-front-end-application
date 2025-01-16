import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./comps/Sidebar";

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    // Routes where the sidebar should not be displayed
    const hideSidebarRoutes = ["/admin/login"];

    // Check if the current route matches any in the hideSidebarRoutes
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

    return (
        <div className={`flex h-screen mt-16`}>
            {/* Conditionally Render Sidebar */}
            {!shouldHideSidebar && (
                <aside className="w-1/4 hidden md:flex">
                    <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
                </aside>
            )}
            {/* Main Content */}
            <main className={`w-full ${shouldHideSidebar ? "w-full" : "w-3/4"}`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
