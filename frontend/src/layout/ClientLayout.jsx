import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ClientSidebar from "../components/ClientComponents/ClientSidebar";
import { Sidebar } from "lucide-react";
import ClientHeader from "../components/ClientComponents/ClientHeader";

const ClientLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-50">
      <ClientSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col transition-all duration-500">
        <main className="flex flex-col flex-1 overflow-y-auto md:p-8 p-4">
          <ClientHeader setIsOpen={setIsOpen} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
