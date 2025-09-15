"use client";

import { useState, useRef, useEffect, useContext } from "react";
import { User, LogOut } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const { setUser, setRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
        setRole("Client");
        navigate("/auth/login");
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-10 h-10 bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      >
        <User className="w-6 h-6 text-slate-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100/80 py-2 z-50 animate-in fade-in-20 zoom-in-95 duration-200">
          <a
            href="/client/profile"
            className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </a>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
