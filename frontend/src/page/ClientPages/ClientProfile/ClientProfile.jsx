import { useContext } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  UserCheck,
  Download,
} from "lucide-react";
import { AuthContext } from "../../../context/AuthContext";
import { useDate } from "../../../utils/date";

const ClientProfile = () => {
  const { user, initials } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="w-full min-h-screen bg-slate-50">
        <div className="mx-auto p-6">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-slate-200/50">
            <p className="text-slate-600">No user data available</p>
          </div>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: "Full Name",
      value: user.name,
      icon: User,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
    },
    {
      title: "Age",
      value: `${user.age} years`,
      icon: Calendar,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      title: "Gender",
      value: user.gender,
      icon: UserCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Role",
      value: user.role,
      icon: User,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const contactInfo = [
    {
      title: "Email Address",
      value: user.email,
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Phone Number",
      value: user.phone,
      icon: Phone,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Address",
      value: user.address,
      icon: MapPin,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  // Mock patient history data - you can replace this with real data from your user object
  const patientHistory = [
    {
      date: "20 Jan, 2023",
      diagnosis: "Malaria",
      severity: "High",
      visits: 2,
      status: "Under Treatment",
      documents: true,
    },
    {
      date: "15 Jan, 2022",
      diagnosis: "Viral Fever",
      severity: "Low",
      visits: 1,
      status: "Cured",
      documents: true,
    },
    {
      date: "28 Jun, 2021",
      diagnosis: "Covid-19",
      severity: "High",
      visits: 3,
      status: "Cured",
      documents: true,
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "cured":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "under treatment":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="w-full flex">
      <div className="mx-auto flex-1 p-4 sm:p-6">
        <header className="mb-8">
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-700 flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {initials}
                </span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight">
                  {user.name}
                </h1>
                <p className="text-slate-600 mt-2 text-base sm:text-lg font-medium break-all">
                  {user.email}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
                  <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase border border-cyan-200">
                    {user.role}
                  </span>
                  <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200">
                    Active
                  </span>
                </div>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide uppercase">
                  Registered Date
                </p>
                <p className="text-base sm:text-lg font-bold text-slate-800 mt-1">
                  {useDate(user.createdAt)}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide uppercase mt-3">
                  Patient ID
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-bold text-cyan-700 break-all">{user._id}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`${stat.bgColor} backdrop-blur-sm rounded-xl p-6 border ${stat.borderColor} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                        {stat.title}
                      </p>
                      <p
                        className={`text-lg font-bold ${stat.color} mt-1 text-balance capitalize`}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-3 ${stat.bgColor} rounded-lg border ${stat.borderColor}`}
                    >
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 ${contact.bgColor} rounded-lg border ${contact.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                        {contact.title}
                      </p>
                      <p
                        className={`text-lg font-semibold ${contact.color} mt-1 text-balance leading-relaxed`}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Patient History */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Patient History
            </h2>
            <p className="text-sm text-slate-600">Total 35 Visits</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Date Of Visit
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Diagnosis
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Severity
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Total Visits
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Status
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patientHistory.map((record, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700">
                            {record.date}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-medium text-slate-800">
                          {record.diagnosis}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(
                            record.severity
                          )}`}
                        >
                          {record.severity}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-medium text-slate-700">
                          {record.visits}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {record.documents && (
                          <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors">
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Download
                            </span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientProfile;
