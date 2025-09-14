import {
  Calendar,
  Users,
  UserCheck,
  Plus,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  Sparkles,
  TrendingUp,
  Bell,
  Activity,
  DollarSign,
} from "lucide-react";
import { useContext } from "react";
import { AppointmentContext } from "../../../context/AppointmentContext";
import { AuthContext } from "../../../context/AuthContext";
import { PatientsContext } from "../../../context/PatientsContext";
import { DoctorContext } from "../../../context/DoctorContext";

export default function ClinicDashboard() {
  const { appointments } = useContext(AppointmentContext);
  const { patients } = useContext(PatientsContext);
  const { doctors } = useContext(DoctorContext);
  const { user } = useContext(AuthContext);

  const clinicAppointments = appointments.filter(
    (appointment) => appointment.clinicId === user._id
  );

  const clinicPatients = patients.filter(
    (patient) => patient.clinicId === user._id
  );

  const clinicDoctors = doctors.filter((doctor) => doctor.clinicId === user._id);

  // Static data for demonstration
  const stats = {
    appointments: clinicAppointments.length,
    patients: clinicPatients.length,
    doctors: clinicDoctors.length,
    revenue: 12450,
  };

  const recentActivities = [
    {
      id: 1,
      action: "New patient registered",
      time: "2 minutes ago",
      type: "patient",
    },
    {
      id: 2,
      action: "Appointment confirmed",
      time: "15 minutes ago",
      type: "appointment",
    },
    { id: 3, action: "Payment received", time: "1 hour ago", type: "payment" },
    {
      id: 4,
      action: "Doctor added to system",
      time: "3 hours ago",
      type: "doctor",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "Dr. Wilson has 3 appointments today",
      priority: "medium",
    },
    { id: 2, message: "Payment pending from John Smith", priority: "high" },
    { id: 3, message: "Monthly report is ready", priority: "low" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Scheduled":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "pending":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "completed":
        return "bg-cyan-50 text-cyan-700 border border-cyan-200";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Scheduled":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                {user.clinicName}
              </h1>
              <p className="text-slate-600 mt-1">
                Welcome back! Here's what's happening at your clinic today.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Appointments Card */}
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Today's Appointments
                </p>
                <p className="text-4xl font-semibold text-cyan-600">
                  {stats.appointments}
                </p>
                <p className="text-sm text-emerald-600 mt-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% from yesterday
                </p>
              </div>
              <div className="bg-cyan-500 p-4 rounded-2xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Patients Card */}
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Patients
                </p>
                <p className="text-4xl font-semibold text-sky-600">
                  {stats.patients}
                </p>
                <p className="text-sm text-emerald-600 mt-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +5 this week
                </p>
              </div>
              <div className="bg-sky-500 p-4 rounded-2xl shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Doctors Card */}
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Active Doctors
                </p>
                <p className="text-4xl font-semibold text-blue-600">
                  {stats.doctors}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  All available today
                </p>
              </div>
              <div className="bg-blue-500 p-4 rounded-2xl shadow-md">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Monthly Revenue
                </p>
                <p className="text-4xl font-semibold text-emerald-600">
                  ${stats.revenue.toLocaleString()}
                </p>
                <p className="text-sm text-emerald-600 mt-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8% from last month
                </p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Appointments */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-8">
                Recent Appointments
              </h2>
              <div className="space-y-4">
                {clinicAppointments.length > 0 ? (
                  clinicAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="group relative overflow-hidden bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-cyan-300 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-slate-800 text-lg">
                              {appointment.patientId.name}
                            </h3>
                            <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                              {appointment.type}
                            </span>
                          </div>
                          <p className="text-slate-600">
                            {appointment.doctorId.name}
                          </p>
                          <p className="text-slate-500 text-sm mt-1">
                            {appointment.date.slice(1, 10)} at {appointment.time}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                              appointment.status
                            )} shadow-sm`}
                          >
                            {getStatusIcon(appointment.status)}
                            <span className="ml-2 capitalize">
                              {appointment.status}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    No appointments found.
                  </div>
                )}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  View All Appointments
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar with Quick Actions and Notifications */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-8">
                Quick Actions
              </h2>
              <div className="space-y-4">
                {/* Add Doctor */}
                <button className="group w-full flex items-center space-x-4 p-6 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-all duration-300 border border-cyan-200 hover:shadow-md hover:-translate-y-0.5">
                  <div className="bg-cyan-500 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-800 text-lg">
                      Add Doctor
                    </h3>
                    <p className="text-slate-600">Add new doctor to clinic</p>
                  </div>
                </button>

                {/* Manage Appointments */}
                <button className="group w-full flex items-center space-x-4 p-6 bg-sky-50 hover:bg-sky-100 rounded-xl transition-all duration-300 border border-sky-200 hover:shadow-md hover:-translate-y-0.5">
                  <div className="bg-sky-500 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-800 text-lg">
                      Manage Appointments
                    </h3>
                    <p className="text-slate-600">View and manage bookings</p>
                  </div>
                </button>

                {/* View Patient Chats */}
                <button className="group w-full flex items-center space-x-4 p-6 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 border border-blue-200 hover:shadow-md hover:-translate-y-0.5">
                  <div className="bg-blue-500 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-800 text-lg">
                      View Patient Chats
                    </h3>
                    <p className="text-slate-600">AI chat history access</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <Activity className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <p className="text-sm text-slate-700">
                        {activity.action}
                      </p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
