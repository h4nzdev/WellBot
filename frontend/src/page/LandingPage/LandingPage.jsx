import { Stethoscope, FileText, Users, BarChart3, Mail, Phone, MapPin, Clock, Shield, Award, Star } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Medora
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/client/login"
              className="text-slate-600 hover:text-cyan-600 font-semibold transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="/client/register"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-24 container mx-auto px-6 text-center relative overflow-hidden">
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-cyan-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-200">
            <Award className="w-4 h-4" />
            Trusted by thousands of patients
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent leading-tight tracking-tighter">
            Your Personal Health
            <span className="block bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
              Companion
            </span>
          </h2>
          
          <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Medora helps you manage your health with ease. Get instant advice from
            our AI symptom checker, schedule appointments, and keep track of your
            medical records, all in one place.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/client/register"
              className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Create Your Account
                <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-200"></div>
              </span>
            </a>
            <a
              href="/clinic/login"
              className="bg-white text-cyan-600 font-bold text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-cyan-100 hover:border-cyan-200"
            >
              For Clinics & Doctors
            </a>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">24/7 Available</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-slate-800 mb-4">Key Features</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a seamless healthcare experience, powered by cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="flex justify-center items-center h-24 w-24 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-12 h-12 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                AI Symptom Checker
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Get instant, AI-powered advice on your symptoms with our advanced diagnostic tool.
              </p>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="flex justify-center items-center h-24 w-24 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-12 h-12 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Appointment Booking
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Easily schedule appointments with doctors and clinics in just a few clicks.
              </p>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="flex justify-center items-center h-24 w-24 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-12 h-12 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Medical Records
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Keep all your medical records securely organized and accessible anywhere.
              </p>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="flex justify-center items-center h-24 w-24 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Clinic Management
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive tools for clinics to manage patients and appointments efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-slate-800 mb-4">Get In Touch</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions? We're here to help you on your healthcare journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Email Us</h4>
              <p className="text-slate-600 mb-4">Get in touch with our support team</p>
              <a 
                href="mailto:support@medora.com" 
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-200"
              >
                support@medora.com
              </a>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl mb-6">
                <Phone className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Call Us</h4>
              <p className="text-slate-600 mb-4">Speak directly with our team</p>
              <a 
                href="tel:+1-800-MEDORA-1" 
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-200"
              >
                +1 (800) MEDORA-1
              </a>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl mb-6">
                <MapPin className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Visit Us</h4>
              <p className="text-slate-600 mb-4">Our headquarters location</p>
              <p className="text-cyan-600 font-semibold">
                123 Healthcare Ave<br />
                Medical District, CA 90210
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Medora</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                Revolutionizing healthcare through innovative technology, making quality medical care accessible to everyone, everywhere.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/client/register" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Get Started</a></li>
                <li><a href="/client/login" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Patient Login</a></li>
                <li><a href="/clinic/login" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Clinic Portal</a></li>
                <li><a href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
                <li><a href="/privacy" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>support@medora.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 (800) MEDORA-1</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>123 Healthcare Ave<br />Medical District, CA 90210</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">© 2024 Medora. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</a>
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;