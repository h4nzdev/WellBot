"use client";

import { useContext, useState } from "react";
import { Shield, Star, Sparkles, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import logo from "../../../assets/medoralogo.png";

const ClientLogin = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginClient = "http://localhost:3000/auth/patient/login";
    try {
      // Send form data for patient login
      const res = await axios.post(loginClient, {
        ...formData,
        role: "patient",
      });
      // Handle response for patient
      if (res.data.patient) {
        setRole(res.data.patient.role);
        setUser(res.data.patient);
        console.log("Login successful for patient:", res.data.patient.email);
      } else {
        console.error("Unexpected response from server:", res.data);
      }
      // Reset form
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg ring-1 ring-cyan-500/20">
              <img src={logo} className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                Medora
              </h1>
              <p className="text-sm text-cyan-600 font-medium">
                Patient Portal
              </p>
            </div>
          </div>
          <p className="text-lg text-slate-600 font-medium">
            Access your health dashboard
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 ring-1 ring-slate-200/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Patient Sign In
            </h2>
            <div className="flex items-center space-x-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-medium">SECURE LOGIN</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 placeholder-slate-400"
                placeholder="patient@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Password
              </label>
              <div className="relative">
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-4 pr-12 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 placeholder-slate-400"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/20 focus:ring-2"
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ring-2 ring-cyan-500/20 hover:ring-cyan-500/30"
            >
              Access Dashboard
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-slate-200"></div>
            <div className="px-4 text-xs text-slate-500 font-medium bg-slate-50 rounded-full py-1">
              PATIENT PORTAL
            </div>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-600">
              New patient?{" "}
              <a
                href="/client/register"
                className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
              >
                Create account
              </a>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-xl">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-800">
                    HIPAA
                  </p>
                  <p className="text-xs text-emerald-600">Compliant</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-xl">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Star className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-800">
                    Trusted
                  </p>
                  <p className="text-xs text-amber-600">1000+ Clinics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
