import { createContext, useContext, useState, ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { GrMail } from "react-icons/gr";
import { FaRibbon } from "react-icons/fa";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


interface SidebarContextType {
    collapsed: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};


export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => setCollapsed(!collapsed);


    return (
        <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};


// Sidebar Component
export const Sidebar = () => {
    const { collapsed, toggleSidebar } = useSidebar();


    const menuItems = [
        { icon: <MdSpaceDashboard size={22} />, id: "dashboard", href: "" },
        { icon: <CgNotes size={22} />, id: "posts", href: "posts" },
        { icon: <GrMail size={22} />, id: "mail", href: "mail" },
        { icon: <FaRibbon size={22} />, id: "credit", href: "credit" },
        { icon: <MdOutlineSettings size={22} />, id: "settings", href: "settings" },
    ];


    return (
        <div
            className={`h-[80vh] rounded-br-[50px] rounded-tl-4xl  flex flex-col justify-between items-center bg-primary text-primary-foreground py-6 transition-all duration-300 sticky top-0 ${collapsed ? "w-20" : " w-24"
                }`}
        >
            <div className="flex flex-col gap-8 mt-4">
                {menuItems.map((item) => (
                    <Tooltip key={item.id}>
                        <TooltipTrigger>
                            <Link
                                href={`/${item.href}`}
                                className="p-3 rounded-xl hover:bg-muted-foreground transition flex items-center gap-4"
                            >
                                {item.icon}
                            </Link>

                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{item.id}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}

                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            onClick={toggleSidebar}
                            className="p-3 rounded-xl hover:bg-white/20 transition mb-4"
                        >
                            {
                                collapsed ? (
                                    <ChevronLeft size={22} />
                                ) : (
                                    <ChevronLeft size={22} className="rotate-180" />
                                )
                            }
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{collapsed ? "Expand Sidebar" : "Collapse Sidebar"}</p>
                    </TooltipContent>
                </Tooltip>
            </div>

            {/* User Icon */}
            <Tooltip>
                <TooltipTrigger>
                    <Link href="#" className="mb-4 cursor-pointer p-1 rounded-xl transition">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Your Profile</p>
                </TooltipContent>
            </Tooltip>
        </div >
    );
};