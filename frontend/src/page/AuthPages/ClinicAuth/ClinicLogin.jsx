"use client";

import {
  Shield,
  Star,
  Sparkles,
  Eye,
  EyeOff,
  AlertTriangle,
} from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import logo from "../../../assets/medoralogo.png";

export default function ClinicLogin() {
  const { setRole, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginClinic = "http://localhost:3000/auth/clinic/login"; // Clinic login endpoint

    try {
      const res = await axios.post(loginClinic, {
        ...formData,
        role: "clinic",
      });

      if (res.data.clinic) {
        setRole(res.data.clinic.role);
        setUser(res.data.clinic);
        setError(null);
      } else {
        console.error("Unexpected response from server:", res.data);
      }

      console.log("Login successful for: clinic");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please check your connection and try again.");
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50/30 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-2xl">
                <img src={logo} className="w-10 h-10" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                Medora
              </h1>
              <p className="text-xs text-cyan-600 font-medium tracking-wider uppercase">
                Healthcare Platform
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Welcome back
            </h2>
            <p className="text-slate-600">Sign in to your clinic dashboard</p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-8 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400" />

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  className="w-full px-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  placeholder="doctor@clinic.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-4 pr-12 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/20 focus:ring-2"
                />
                <span className="ml-3 text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {error ? (
              <div className="border border-red-400 p-1 px-4 bg-red-100 flex items-center space-x-2 rounded">
                <AlertTriangle className="text-red-600" />
                <p className="text-red-600">{error}</p>
              </div>
            ) : (
              ""
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
            >
              Sign In to Dashboard
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-slate-200" />
            <span className="px-4 text-xs text-slate-500 font-medium">
              SECURE LOGIN
            </span>
            <div className="flex-1 border-t border-slate-200" />
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <div className="flex-shrink-0">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-800">HIPAA</p>
                <p className="text-xs text-emerald-600">Compliant</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
              <div className="flex-shrink-0">
                <Star className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-800">1000+</p>
                <p className="text-xs text-amber-600">Clinics</p>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 text-center">
            <p className="text-sm text-slate-600">
              New to Medora?{" "}
              <a
                href="/clinic/register"
                className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
              >
                Create your account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
