import ClientSidebar from "../components/ClientComponents/ClientSidebar";

const ClientLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100">
      <ClientSidebar />
      <div className="flex-1 md:ml-64 lg:ml-64">
        <main className="p-6 w-full">{children}</main>
      </div>
    </div>
  );
};

export default ClientLayout;