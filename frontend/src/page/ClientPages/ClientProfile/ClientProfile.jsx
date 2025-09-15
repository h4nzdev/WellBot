import { useContext } from "react";
import { User, Mail, Phone, MapPin, Calendar, UserCheck } from "lucide-react";
import { AuthContext } from "../../../context/AuthContext";

const ClientProfile = () => {
  const { user } = useContext(AuthContext);

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
      value: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
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

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        <header className="mb-8">
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-24 h-24 rounded-full bg-cyan-700 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white tracking-wide">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                  {user.name}
                </h1>
                <p className="text-slate-600 mt-2 text-lg font-medium">
                  {user.email}
                </p>
                <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide uppercase mt-3 border border-cyan-200">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`${stat.bgColor} backdrop-blur-sm rounded-xl p-6 border ${stat.borderColor} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                        {stat.title}
                      </p>
                      <p
                        className={`text-lg font-bold ${stat.color} mt-1 text-balance`}
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

        <section>
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
      </div>
    </div>
  );
};

export default ClientProfile;
