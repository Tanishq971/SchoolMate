"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItems } from "../constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-64 h-screen bg-white border-r border-gray-200">
      <ul className="p-4 space-y-2">
        {SidebarItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === item.url
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;