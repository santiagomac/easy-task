import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Navbar />
        <div className="px-4 py-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}
