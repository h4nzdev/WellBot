import ClientDashboardStats from "./components/ClientDashboardStats";
import ClientDashboardRecentAppointment from "./components/ClientDashboardRecentAppointment";
import ClientDashboardQuickActions from "./components/ClientDashboardQuickActions";

const ClientDashboard = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">Welcome back, John Doe</p>
      </div>

      {/* Stats Grid */}
      <ClientDashboardStats />

      {/* Recent Appointments and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Appointments */}
        <ClientDashboardRecentAppointment />

        {/* Quick Actions */}
        <ClientDashboardQuickActions />
      </div>
    </div>
  );
};

export default ClientDashboard;
