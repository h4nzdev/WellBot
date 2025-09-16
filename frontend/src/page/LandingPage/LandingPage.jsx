
import {chatbot, Stethoscope, FileText, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/medoralogo.png" alt="Medora" className="h-8 w-auto" />
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Medora
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/client/login"
              className="text-slate-600 hover:text-cyan-600 font-semibold transition-colors"
            >
              Login
            </a>
            <a
              href="/client/register"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight tracking-tighter">
          Your Personal Health Companion
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Medora helps you manage your health with ease. Get instant advice from
          our AI symptom checker, schedule appointments, and keep track of your
          medical records, all in one place.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/client/register"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Create Your Account
          </a>
          <a
            href="/clinic/login"
            className="bg-white text-cyan-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            For Clinics & Doctors
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800">
              Key Features
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              Everything you need for a seamless healthcare experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-cyan-100 rounded-full">
                <AiOutlineChatbot className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mt-6">
                AI Symptom Checker
              </h4>
              <p className="text-slate-600 mt-2">
                Get instant, AI-powered advice on your symptoms.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-cyan-100 rounded-full">
                <Stethoscope className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mt-6">
                Appointment Booking
              </h4>
              <p className="text-slate-600 mt-2">
                Easily schedule appointments with doctors and clinics.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-cyan-100 rounded-full">
                <FileText className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mt-6">
                Medical Records
              </h4>
              <p className="text-slate-600 mt-2">
                Keep all your medical records securely in one place.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-20 w-20 mx-auto bg-cyan-100 rounded-full">
                <Users className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mt-6">
                Clinic Management
              </h4>
              <p className="text-slate-600 mt-2">
                Tools for clinics to manage patients and appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Medora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
