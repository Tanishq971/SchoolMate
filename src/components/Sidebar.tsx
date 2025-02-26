"use client";
import React from "react";
import { SidebarItems } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="px-2 text-sm font-medium">
      {SidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer ${
            pathname === item.url
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <Link href={item.url} className="flex items-center gap-3 w-full py-4 px-6">
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;