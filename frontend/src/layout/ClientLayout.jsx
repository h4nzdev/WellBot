import ClientSidebar from "../components/ClientComponents/ClientSidebar";
import ClientMobileNav from "../components/ClientComponents/ClientMobileNav";

const ClientLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>
      <div className="flex-1 md:ml-64 pb-16 md:pb-0">
        <main className="p-4 sm:p-6 w-full">{children}</main>
      </div>
      <div className="md:hidden">
        <ClientMobileNav />
      </div>
    </div>
  );
};

export default ClientLayout;
