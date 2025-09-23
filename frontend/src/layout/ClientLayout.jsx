import { useContext, useEffect, useState } from "react";
import ClientSidebar from "../components/ClientComponents/ClientSidebar";
import ClientMobileNav from "../components/ClientComponents/ClientMobileNav";
import ClientHeader from "../components/ClientComponents/ClientHeader/ClientHeader";
import { AuthContext } from "../context/AuthContext";

const ClientLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-cyan-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-800 animate-pulse">
            Welcome to {user?.clinicId?.clinicName}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <div className="hidden md:block md:w-64 md:flex-shrink-0">
        <ClientSidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <ClientHeader />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 w-full pb-20 md:pb-6">{children}</main>
      </div>

      {/* Bottom Nav for mobile */}
      <div className="md:hidden">
        <ClientMobileNav />
      </div>
    </div>
  );
};

export default ClientLayout;
