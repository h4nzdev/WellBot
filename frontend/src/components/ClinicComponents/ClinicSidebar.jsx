import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  MessageSquare,
  FileText,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  Stethoscope,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function ClinicSidebar() {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      link: "/clinic/dashboard",
    },
    {
      icon: Calendar,
      label: "Appointments",
      active: false,
      link: "/clinic/appointments",
    },
    {
      icon: Users,
      label: "Patients",
      active: false,
      link: "/clinic/patients",
    },
    {
      icon: UserCheck,
      label: "Doctors",
      active: false,
      link: "/clinic/doctors",
    },
    {
      icon: MessageSquare,
      label: "Patient Chats",
      active: false,
      link: "/clinic/patients-chats",
    },
    {
      icon: FileText,
      label: "Medical Records",
      active: false,
      link: "/clinic/medical-records",
    },
    {
      icon: Bell,
      label: "Notifications",
      active: false,
      link: "/clinic/notification",
    },
    {
      icon: CreditCard,
      label: "Subscription",
      active: false,
      link: "/clinic/subscriptions",
    },
    {
      icon: Settings,
      label: "Settings",
      active: false,
      link: "/clinic/settings",
    },
  ];
  const path = useLocation();
  const navigate = useNavigate();
  const { setUser, setRole } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("role");
        setUser(false);
        setRole("Clinic");
        navigate("/auth/login");
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    });
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex items-center space-x-3 p-6 border-b flex-shrink-0">
        <div className="bg-cyan-600 p-2 rounded-lg">
          <Stethoscope className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-800">HealthCare Pro</h1>
          <p className="text-sm text-slate-500">Clinic Management</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link to={item.link}>
            <button
              key={index}
              className={`
              w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200
              ${
                path.pathname === item.link
                  ? "bg-cyan-600 text-white shadow-md ml-2"
                  : "text-slate-600 hover:bg-slate-100"
              }
            `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          </Link>
        ))}
      </nav>

      {/* User Profile & Logout */}
      <div className="flex-shrink-0 p-4 border-t bg-white">
        <div className="flex items-center space-x-3 p-3 mb-3">
          <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">DC</span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Dr. Clinical</h3>
            <p className="text-sm text-slate-500">Admin</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
