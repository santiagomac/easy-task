"use client";

import { usePathname } from "next/navigation";
import { SidebarInset, SidebarTrigger } from "./ui/sidebar";
import { useEffect, useState } from "react";
import { capitalizeLetter } from "@/lib/utils";

export const Navbar = () => {
  const pathName = usePathname();
  const [finalPathName, setFinalPathName] = useState("");

  useEffect(() => {
    if (pathName.trim() === "/") {
      setFinalPathName("Dashboard");
      return;
    }

    setFinalPathName(capitalizeLetter(pathName.split("/")[1]));
  }, [pathName]);

  return (
    <SidebarInset>
      <div className="flex h-16 border-b px-6 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h2 className="text-xl font-bold">{finalPathName}</h2>
        </div>
      </div>
    </SidebarInset>
  );
};
