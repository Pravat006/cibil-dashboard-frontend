"use client"

import { Sidebar, SidebarProvider } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <SidebarProvider>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6 bg-background min-h-screen">{children}</main>
            </div>
        </SidebarProvider>
    );
}