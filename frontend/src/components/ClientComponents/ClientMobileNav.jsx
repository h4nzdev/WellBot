import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Book, Bell, MessageSquare } from "lucide-react";

const ClientMobileNav = () => {
  const path = useLocation();

  const menuItems = [
    { icon: Home, link: "/client/dashboard", label: "Home" },
    { icon: Calendar, link: "/client/appointments", label: "Appointments" },
    { icon: Book, link: "/client/medical-records", label: "Records" },
    { icon: Bell, link: "/client/reminders", label: "Reminders" },
    { icon: MessageSquare, link: "/client/chats", label: "AI Chat" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-t-lg z-50">
      <div className="flex justify-around items-center h-16">
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 relative ${
              path.pathname === item.link
                ? "text-cyan-600"
                : "text-slate-500 hover:text-cyan-600"
            }`}
          >
            <item.icon className={`w-6 h-6 transition-transform duration-200 ${path.pathname === item.link ? "transform scale-110" : ""}`} />
            <span
              className={`text-xs font-medium ${
                path.pathname === item.link ? "font-semibold" : ""
              }`}
            >
              {item.label}
            </span>
            {path.pathname === item.link && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-600 rounded-full"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ClientMobileNav;
