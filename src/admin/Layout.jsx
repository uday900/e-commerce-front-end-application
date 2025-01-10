import { useState } from "react";
import Sidebar from "./comps/Sidebar";
import Navbar from "./comps/Nav";

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <>
        {/* <Navbar/> */}
        <div className="flex h-screen mt-16">
            {/* Sidebar */}
            <aside className="w-1/4 hidden md:flex" >

                <Sidebar setIsSidebarOpen={setIsSidebarOpen} />

            </aside>
            {/* Main Content */}
            <main className="w-full">{children}</main>
        </div></>
        )
};

export default Layout;