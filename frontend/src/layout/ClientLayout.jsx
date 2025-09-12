import ClientSidebar from "../components/ClientComponents/ClientSidebar";
import ClientMobileNav from "../components/ClientComponents/ClientMobileNav";

const ClientLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="hidden md:block md:w-64 md:flex-shrink-0">
        <ClientSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 sm:p-6 w-full pb-20 md:pb-6">{children}</main>
      </div>
      <div className="md:hidden">
        <ClientMobileNav />
      </div>
    </div>
  );
};

export default ClientLayout;
