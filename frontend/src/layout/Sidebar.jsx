import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Bot,
  HeartPulse,
  BellRing,
  UserCircle,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/client/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Appointments",
      path: "/client/appointments",
      icon: CalendarDays,
    },
    {
      name: "AI Symptom Checker",
      path: "/client/chats",
      icon: Bot,
    },
    {
      name: "Medical Records",
      path: "/client/medical-records",
      icon: HeartPulse,
    },
    {
      name: "Reminders",
      path: "/client/reminders",
      icon: BellRing,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg flex flex-col">
      <div className="p-6 text-2xl font-bold text-cyan-600 border-b border-slate-200">
        MediConnect
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center p-3 my-1 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-cyan-600 text-white shadow-md"
                    : "text-slate-700 hover:bg-cyan-50"
                }`}
              >
                <link.icon className="w-5 h-5 mr-3" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center mb-4">
          <UserCircle className="w-10 h-10 mr-3 text-slate-500" />
          <div>
            <p className="font-semibold text-slate-800">John Doe</p>
            <p className="text-sm text-slate-500">Patient</p>
          </div>
        </div>
        <button className="w-full flex items-center p-3 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
