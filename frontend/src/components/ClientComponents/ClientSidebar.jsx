import { Link } from "react-router-dom";
import {
  Bell,
  Calendar,
  FileText,
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  MessageSquare,
  Pill,
  Settings,
  User,
  X,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ClientSidebar({ isOpen, setIsOpen }) {
  const { setUser } = useContext(AuthContext);

  const navItems = [
    { name: "Dashboard", to: "/", icon: LayoutDashboard },
    { name: "Profile", to: "/profile", icon: User },
    { name: "AI Assistant", to: "/ai-assistant", icon: MessageSquare },
    { name: "Book Appointment", to: "/book-appointment", icon: Calendar },
    { name: "Clinic Locations", to: "/clinic-locations", icon: MapPin },
    { name: "Notifications", to: "/notifications", icon: Bell },
    { name: "Medical Records", to: "/medical-records", icon: FileText },
    { name: "Prescriptions", to: "/prescriptions", icon: Pill },
  ];

  const bottomItems = [
    { name: "Settings", icon: Settings, disabled: true },
    { name: "Logout", icon: LogOut, danger: true }, // removed disabled
  ];

  const handleLogout = () => {
    // clear auth
    setUser(null);

    // optional: also clear token if you store it in localStorage
    localStorage.removeItem("token");
  };

  return (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:static lg:inset-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">WellBot+</span>
        </div>
        <X
          onClick={() => setIsOpen(false)}
          className="lg:hidden cursor-pointer"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-2">
          {navItems.map(({ name, to, icon: Icon }) => (
            <Link
              key={name}
              to={to}
              className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Icon className="mr-3 h-5 w-5" />
              {name}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          {bottomItems.map(({ name, icon: Icon, danger }) => (
            <button
              key={name}
              onClick={name === "Logout" ? handleLogout : undefined} // only Logout gets onClick
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                danger
                  ? "text-red-600 hover:bg-red-50 hover:text-red-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default ClientSidebar;
