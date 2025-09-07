import {
  Calendar,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
  Stethoscope,
  Users,
  CheckCircle,
  Star,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WellBotLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-2xl shadow-lg">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                WellBot+
              </span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#how"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                How It Works
              </a>
              <a
                href="#clinics"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Clinics
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            <button
              onClick={() => navigate("/auth/login")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-emerald-500/5 to-blue-700/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200/50">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Healthcare Platform
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Book appointments, manage prescriptions, and access healthcare
              services with ease. WellBot+ connects you to quality healthcare
              providers in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#clinics"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="about"
                className="bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600 font-medium">Happy Patients</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Healthcare Providers</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600 font-medium">Appointments Booked</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              About WellBot+
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              We're revolutionizing healthcare access by connecting patients
              with quality healthcare providers through our intelligent
              appointment system.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose WellBot+?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Easy Booking
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Book appointments in just a few clicks with our intuitive
                      interface.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      AI-Powered Assistant
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Get instant support and health guidance from our
                      intelligent chatbot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Comprehensive Health Management
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Track appointments, prescriptions, and health metrics in
                      one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    24/7 Support
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Quick Response
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    AI Assistant
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Find Nearby
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              How It Works
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
              Simple steps to better healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sign Up & Profile
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Create your account and complete your health profile to get
                personalized care recommendations.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find & Book
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Search for healthcare providers near you and book appointments
                that fit your schedule.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manage & Track
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Track your appointments, manage prescriptions, and monitor your
                health progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section
        id="clinics"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Featured Clinics
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
              Trusted healthcare providers in your area
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinic 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    City General Hospital
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      4.8 (124 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full-service hospital offering comprehensive medical care with
                state-of-the-art facilities and experienced specialists.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>123 Healthcare Ave, Metro Manila</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>(02) 8123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span>24/7 Emergency Care</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-full font-medium">
                  Cardiology
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-2 rounded-full font-medium">
                  Emergency
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-2 rounded-full font-medium">
                  Surgery
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>

            {/* Clinic 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Wellness Family Clinic
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      4.6 (89 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Family-oriented healthcare clinic providing personalized medical
                care for patients of all ages in a comfortable environment.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>456 Family St, Quezon City</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>(02) 8765-4321</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span>Mon-Fri: 8AM-6PM, Sat: 8AM-4PM</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-full font-medium">
                  Family Medicine
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-2 rounded-full font-medium">
                  Pediatrics
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-2 rounded-full font-medium">
                  Checkups
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>

            {/* Clinic 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Metro Specialist Center
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      4.9 (156 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premier specialist center featuring board-certified physicians
                and advanced diagnostic equipment for specialized care.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>789 Specialist Blvd, Makati City</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>(02) 8555-0123</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span>Mon-Sat: 7AM-7PM</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-full font-medium">
                  Neurology
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-2 rounded-full font-medium">
                  Orthopedics
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-2 rounded-full font-medium">
                  Radiology
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
              Everything you need to know about WellBot+
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How do I book an appointment?
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Simply sign up, search for healthcare providers in your area,
                select your preferred time slot, and confirm your booking. It's
                that easy!
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Is my health information secure?
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Yes, we use industry-standard encryption and comply with
                healthcare privacy regulations to keep your information safe and
                secure.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can I cancel or reschedule appointments?
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                You can manage your appointments through your dashboard. Please
                note that some providers may have specific cancellation
                policies.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How does the AI assistant work?
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our AI assistant can help you find suitable healthcare
                providers, answer basic health questions, and guide you through
                the booking process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Contact Developer
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Get in touch for technical support or inquiries
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">Email</h3>
                  <p className="text-gray-300">developer@wellbotplus.com</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Github className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">GitHub</h3>
                  <p className="text-gray-300">github.com/wellbotplus</p>
                </div>
              </div>
              <div className="text-center mt-10">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">LinkedIn</h3>
                <p className="text-gray-300">linkedin.com/in/wellbotplus-dev</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-2xl shadow-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <span className="ml-4 text-xl font-bold">WellBot+</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Simplifying healthcare access through intelligent appointment
                management.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-200">
                  Appointment Booking
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  AI Health Assistant
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Prescription Management
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Clinic Directory
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-200">
                  Help Center
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Connect</h3>
              <div className="flex space-x-4">
                <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded-2xl transition-all duration-200 hover:scale-105 cursor-pointer">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded-2xl transition-all duration-200 hover:scale-105 cursor-pointer">
                  <Github className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded-2xl transition-all duration-200 hover:scale-105 cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WellBot+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WellBotLandingPage;
