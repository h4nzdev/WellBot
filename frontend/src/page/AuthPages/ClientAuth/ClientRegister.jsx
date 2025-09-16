import { useState, useEffect, useContext } from "react";
import { Shield, Star, Check } from "lucide-react";
import axios from "axios";
import { ClinicContext } from "../../../context/ClinicContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientRegister() {
  // Mock clinics data - replace with API call to fetch clinics
  const { clinics } = useContext(ClinicContext);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    clinicId: "", // selected clinic id
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/patient/register",
        formData
      );
      toast.success(res.data.message);
      setFormData({
        clinicId: "",
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error:", error);
<<<<<<< HEAD
      toast.error(error.response?.data?.message || "Registration failed");
=======
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        alert(error.response.data.message);
      } else {
        setError("Login failed. Please check your connection and try again.");
      }
      alert(error.response?.data?.message || "Registration failed");
>>>>>>> ad4f30a8ae4ffbfad78a2ef2e745e19142b2beff
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-cyan-500 p-4 rounded-2xl shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-800">Medora</h1>
          </div>
          <p className="text-lg text-slate-600">Create your client account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Register as a Client
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Clinic Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Select Clinic
              </label>
              <select
                name="clinicId"
                value={formData.clinicId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>
                  -- Choose a clinic --
                </option>
                {clinics?.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.clinicName}
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="0"
                  placeholder="30"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Gender and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="" disabled>
                    -- Select gender --
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Email and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="jane.doe@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="456 Elm Street, City, State 67890"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                required
              />
              <span className="ml-2 text-sm text-slate-600">
                I agree to the{" "}
                <a href="#" className="text-cyan-600 hover:text-cyan-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-cyan-600 hover:text-cyan-700">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <a
                href="/client/login"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Sign in
              </a>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Star className="w-4 h-4 text-amber-500" />
              <span>Trusted by 1000+ healthcare providers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
