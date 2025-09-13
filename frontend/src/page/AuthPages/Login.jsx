import { Shield, Star, Sparkles } from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { setRole, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [activeTab, setActiveTab] = useState("clinic"); // 'clinic' or 'patient'

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginUrl = "http://localhost:3000/auth/login"; // Single login endpoint

    try {
      // Send form data along with the role
      const res = await axios.post(loginUrl, { ...formData, role: activeTab });

      // Handle response based on role
      if (activeTab === "clinic" && res.data.clinic) {
        setRole(res.data.clinic.role);
        setUser(res.data.clinic);
      } else if (activeTab === "patient" && res.data.patient) {
        setRole(res.data.patient.role);
        setUser(res.data.patient);
      } else {
        // Handle unexpected response
        console.error("Unexpected response from server:", res.data);
      }

      console.log("Login successful for:", activeTab);
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-cyan-500 p-4 rounded-2xl shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-800">Medora</h1>
          </div>
          <p className="text-lg text-slate-600">
            Sign in to your {activeTab} dashboard
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 rounded-l-lg ${
                activeTab === "clinic"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-200 text-slate-800"
              }`}
              onClick={() => setActiveTab("clinic")}
            >
              Clinic
            </button>
            <button
              className={`px-6 py-2 rounded-r-lg ${
                activeTab === "patient"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-200 text-slate-800"
              }`}
              onClick={() => setActiveTab("patient")}
            >
              Patient
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder={
                  activeTab === "clinic"
                    ? "doctor@clinic.com"
                    : "patient@example.com"
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span className="ml-2 text-sm text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600">
              New to Medora?{" "}
              <a
                href="/auth/register"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Create account
              </a>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Star className="w-4 h-4 text-amber-500" />
              <span>Trusted by 1000+ clinics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
