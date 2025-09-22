"use client";

import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Shield,
  Star,
  Eye,
  EyeOff,
  AlertTriangle,
  ArrowLeft,
  Calendar,
  MapPin,
  Phone,
  Users,
  Stethoscope,
} from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import logo from "../../../assets/medoralogo.png";
import clinic from "../../../assets/clinic.jpg";
import { toast } from "react-toastify";

const ClientLogin = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [loadingClinic, setLoadingClinic] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Extract clinicId from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const clinicId = searchParams.get("clinicId");

    if (clinicId) {
      fetchClinicDetails(clinicId);
    }
  }, [location]);

  // Fetch clinic details when clinicId is present in URL
  const fetchClinicDetails = async (clinicId) => {
    try {
      setLoadingClinic(true);
      const response = await fetch(`http://localhost:3000/clinic/${clinicId}`);
      if (response.ok) {
        const clinicData = await response.json();
        setSelectedClinic(clinicData);
      } else {
        console.error("Failed to fetch clinic details");
      }
    } catch (error) {
      console.error("Error fetching clinic details:", error);
      toast.error("Failed to load clinic information");
    } finally {
      setLoadingClinic(false);
    }
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginClient = "http://localhost:3000/auth/patient/login";

    try {
      const res = await axios.post(loginClient, {
        ...formData,
        role: "patient",
      });

      if (res.data.patient) {
        setRole(res.data.patient.role);
        setUser(res.data.patient);
        console.log("Login successful for patient:", res.data.patient.email);

        // Redirect to appointments page or clinic booking if clinic is selected
        if (selectedClinic) {
          navigate(`/appointments?clinicId=${selectedClinic._id}`);
        } else {
          navigate("/dashboard");
        }
      }

      setFormData({ email: "", password: "" });
      toast.success("Logged in successfully");
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please check your connection and try again.");
      }
      console.error("Login error:", error);
    }
  };

  // Clear clinic selection and return to default view
  const clearClinicSelection = () => {
    setSelectedClinic(null);
    navigate("/client/login");
  };

  // Enhanced Clinic Details Display Component
  const ClinicDetailsSection = ({ clinic }) => (
    <div className="flex flex-col justify-center items-center w-full px-12 relative z-10 bg-black/70">
      {/* Clinic Header - keeping original structure */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border border-white/30 backdrop-blur-sm">
            <Stethoscope className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Book with {clinic.clinicName}
        </h2>
        <p className="text-cyan-200 text-lg leading-relaxed max-w-md">
          Sign in to book your appointment with {clinic.contactPerson}
        </p>
      </div>

      {/* Enhanced Clinic Information Card - keeping original layout */}
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 w-full max-w-sm mb-6 shadow-2xl">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Clinic Details
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200 hover:bg-white/15">
            <Users className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span className="text-white text-sm font-medium">
              {clinic.contactPerson}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200 hover:bg-white/15">
            <Phone className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span className="text-white text-sm font-medium">{clinic.phone}</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200 hover:bg-white/15">
            <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
            <span className="text-white text-sm leading-tight font-medium">
              {clinic.address}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200 hover:bg-white/15">
            <Shield className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span className="text-white text-sm font-medium capitalize">
              {clinic.subscriptionPlan} Plan Clinic
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Benefits - keeping original 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg transition-all duration-200 hover:bg-white/20 hover:shadow-xl">
          <Calendar className="w-6 h-6 text-white mx-auto mb-2" />
          <p className="text-white text-xs font-medium">Easy Online Booking</p>
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg transition-all duration-200 hover:bg-white/20 hover:shadow-xl">
          <Star className="w-6 h-6 text-white mx-auto mb-2" />
          <p className="text-white text-xs font-medium">Verified & Trusted</p>
        </div>
      </div>

      {/* Enhanced Bottom Note - keeping original position */}
      <div className="absolute bottom-8 left-12 right-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <p className="text-cyan-500 text-sm text-center flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Secure appointment booking
          </p>
        </div>
      </div>
    </div>
  );

  // Default Branding Component
  const DefaultBrandingSection = () => (
    <div className="flex flex-col justify-center items-center w-full px-12 relative z-10 bg-black/60">
      {/* Logo and Brand */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-8">
          <img
            src={logo}
            className="w-20 h-20 rounded-3xl shadow-2xl shadow-black/20"
            alt="Medora Logo"
          />
          <div className="ml-6 text-left">
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Medora
            </h1>
            <p className="text-cyan-100 font-medium tracking-wider">
              Patient Portal
            </p>
          </div>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Your Health, Simplified
          </h2>
          <p className="text-cyan-100 text-lg leading-relaxed max-w-md">
            Securely access appointments, medical records, and health reminders
            in one place.
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
          <Shield className="w-8 h-8 text-white mx-auto mb-3" />
          <h3 className="text-white font-bold text-lg">HIPAA</h3>
          <p className="text-cyan-100 text-sm">Compliant</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
          <Star className="w-8 h-8 text-white mx-auto mb-3" />
          <h3 className="text-white font-bold text-lg">1000+</h3>
          <p className="text-cyan-100 text-sm">Trusted Clinics</p>
        </div>
      </div>

      {/* Security Notice */}
      <div className="absolute bottom-8 left-12 right-12">
        <p className="text-cyan-200 text-sm text-center flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          Enterprise-grade security & encryption
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Side - Dynamic Content */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 relative bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${clinic})` }}
      >
        {/* Background Overlay Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-500"></div>

        {/* Content Section */}
        {loadingClinic ? (
          <div className="flex items-center justify-center w-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-cyan-100 text-lg">
                Loading clinic information...
              </p>
            </div>
          </div>
        ) : selectedClinic ? (
          <ClinicDetailsSection clinic={selectedClinic} />
        ) : (
          <DefaultBrandingSection />
        )}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 py-12">
        <div className="w-full max-w-2xl">
          {/* Navigation */}
          <div className="mb-6 space-y-2">
            {selectedClinic ? (
              <button
                onClick={clearClinicSelection}
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">View All Clinics</span>
              </button>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Home</span>
              </button>
            )}
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={logo} className="w-12 h-12" alt="Medora Logo" />
              <div className="ml-3 text-left">
                <h1 className="text-2xl font-bold text-slate-800">Medora</h1>
                <p className="text-cyan-600 text-sm font-medium">
                  {selectedClinic ? "Book Appointment" : "Patient Portal"}
                </p>
              </div>
            </div>
            {selectedClinic && (
              <div className="bg-cyan-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-slate-800 mb-1">
                  Booking with {selectedClinic.clinicName}
                </h3>
                <p className="text-slate-600 text-sm">
                  {selectedClinic.contactPerson}
                </p>
              </div>
            )}
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {selectedClinic ? "Book Your Appointment" : "Welcome Back"}
            </h2>
            <p className="text-slate-600">
              {selectedClinic
                ? `Sign in to book with ${selectedClinic.clinicName}`
                : "Sign in to your patient dashboard"}
            </p>
          </div>

          {/* Login Form */}
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
                  className="w-full px-4 py-4 bg-white border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all duration-300 placeholder:text-slate-400 text-slate-800"
                  placeholder="patient@example.com"
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
                  className="w-full px-4 py-4 pr-12 bg-white border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all duration-300 placeholder:text-slate-400 text-slate-800"
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
                className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Error Display */}
            {error ? (
              <div className="border border-red-300 p-4 bg-red-50 flex items-center space-x-3 rounded-2xl">
                <AlertTriangle className="text-red-500 w-5 h-5 flex-shrink-0" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            ) : (
              ""
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-cyan-500/20 focus:outline-none shadow-lg shadow-cyan-500/25"
            >
              Access Dashboard
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-slate-300" />
            <span className="px-4 text-xs text-slate-500 font-medium">
              {selectedClinic ? "APPOINTMENT BOOKING" : "PATIENT PORTAL"}
            </span>
            <div className="flex-1 border-t border-slate-300" />
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              New patient?{" "}
              <a
                href="/client/register"
                className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors hover:underline"
              >
                Create account
              </a>
            </p>
          </div>

          {/* Security Features */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Star className="w-4 h-4 text-amber-500" />
              <span>Trusted by healthcare providers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;