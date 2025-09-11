import { Shield, Star, Sparkles, Check } from "lucide-react";

export default function Registere() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-cyan-500 p-4 rounded-2xl shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-800">Medora</h1>
          </div>
          <p className="text-lg text-slate-600">Create your clinic account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Register Your Clinic
          </h2>

          <form className="space-y-6">
            {/* Clinic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Clinic Name
                </label>
                <input
                  type="text"
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
                {/* Basic Plan */}
                <div className="border-2 border-slate-200 rounded-xl p-4 hover:border-cyan-500 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="basic"
                    className="sr-only"
                  />
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
                        Basic scheduling
                      </li>
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Email support
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Professional Plan */}
                <div className="border-2 border-cyan-500 bg-cyan-50 rounded-xl p-4 cursor-pointer relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="plan"
                    value="professional"
                    className="sr-only"
                    defaultChecked
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Professional
                    </h4>
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      $79<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-1" />
                        Up to 500 patients
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
                        Analytics
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="border-2 border-slate-200 rounded-xl p-4 hover:border-cyan-500 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="enterprise"
                    className="sr-only"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Enterprise
                    </h4>
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      $199<span className="text-sm font-normal">/month</span>
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
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <a
                href="/auth/login"
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
