import { useState } from "react";
import { Shield, Star, Check } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentModal from "../../../components/ClinicComponents/PaymentModal/PaymentModal";
import logo from "../../../assets/medoralogo.png";
import { useNavigate } from "react-router-dom";

export default function ClinicRegister() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clinicName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    subscriptionPlan: "free", // default to free plan
    agreeToTerms: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentSetup, setIsPaymentSetup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlanSelect = (plan) => {
    setFormData((prev) => ({
      ...prev,
      subscriptionPlan: plan,
    }));
    // Reset payment setup when changing plans
    if (plan === "free") {
      setIsPaymentSetup(true);
    } else {
      setIsPaymentSetup(false);
      setIsModalOpen(true);
    }
  };

  const handlePaymentSubmit = (bankDetails) => {
    console.log("Bank Details:", bankDetails); // Mock submission
    setIsModalOpen(false);
    setIsPaymentSetup(true);
    toast.success("Payment details saved successfully!");
  };

  const registerClinic = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/clinic/register",
        formData
      );
      toast.success(res.data.message);
      setFormData({
        clinicName: "",
        contactPerson: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        subscriptionPlan: "free",
        agreeToTerms: false,
      });
      navigate("/clinic/login")
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

  console.log(formData.subscriptionPlan);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePaymentSubmit}
      />
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-cyan-500 p-4 rounded-2xl shadow-lg">
              <img src={logo} alt="img" className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-800">Medora</h1>
          </div>
          <p className="text-lg text-slate-600">Create your clinic account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Register Your Clinic
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              registerClinic();
            }}
          >
            {/* Clinic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Clinic Name
                </label>
                <input
                  type="text"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="Downtown Medical Center"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="Dr. John Smith"
                />
              </div>
            </div>

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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="admin@clinic.com"
                />
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Clinic Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder="123 Medical Drive, City, State 12345"
              />
            </div>

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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Plan Selection */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Choose Your Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${
                    formData.subscriptionPlan === "free"
                      ? "border-cyan-500 bg-cyan-50"
                      : "border-slate-200 hover:border-cyan-300"
                  }`}
                  onClick={() => handlePlanSelect("free")}
                >
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Free</h4>
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      $0<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Up to 25 patients
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Basic scheduling
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Email support
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-xl p-4 transition-all cursor-pointer relative ${
                    formData.subscriptionPlan === "basic"
                      ? "border-cyan-500 bg-cyan-50"
                      : "border-slate-200 hover:border-cyan-300"
                  }`}
                  onClick={() => handlePlanSelect("basic")}
                >
                  {formData.subscriptionPlan === "basic" && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                        Selected
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Basic</h4>
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      $29<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Up to 100 patients
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Advanced scheduling
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Priority support
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Basic analytics
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-xl p-4 transition-all cursor-pointer relative ${
                    formData.subscriptionPlan === "pro"
                      ? "border-cyan-500 bg-cyan-50"
                      : "border-slate-200 hover:border-cyan-300"
                  }`}
                  onClick={() => handlePlanSelect("pro")}
                >
                  {formData.subscriptionPlan === "pro" && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                        Selected
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Pro</h4>
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      $79<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Unlimited patients
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Full features
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        24/7 support
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Advanced analytics
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Custom integrations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
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
              disabled={formData.subscriptionPlan !== "free" && !isPaymentSetup}
              className={`w-full font-medium py-3 px-4 rounded-xl shadow-md transition-all duration-300 transform 
                ${
                  formData.subscriptionPlan !== "free" && !isPaymentSetup
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-700 hover:shadow-lg hover:-translate-y-0.5"
                } text-white`}
              title={
                formData.subscriptionPlan !== "free" && !isPaymentSetup
                  ? "Please set up payment first"
                  : ""
              }
            >
              Create Account
            </button>
            {formData.subscriptionPlan !== "free" && !isPaymentSetup && (
              <p className="text-sm text-red-500 mt-2 text-center">
                Please set up payment details before creating your account
              </p>
            )}
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <a
                href="/clinic/login"
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
