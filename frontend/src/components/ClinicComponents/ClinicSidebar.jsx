import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  MessageSquare,
  FileText,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  Stethoscope,
} from "lucide-react"

export default function ClinicSidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointments" },
    { icon: Users, label: "Patients" },
    { icon: UserCheck, label: "Doctors" },
    { icon: MessageSquare, label: "Patient Chats" },
    { icon: FileText, label: "Medical Records" },
    { icon: Bell, label: "Notifications" },
    { icon: CreditCard, label: "Subscription" },
    { icon: Settings, label: "Settings" },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex items-center space-x-3 p-6 border-b flex-shrink-0">
        <div className="bg-cyan-600 p-2 rounded-lg">
          <Stethoscope className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-800">HealthCare Pro</h1>
          <p className="text-sm text-slate-500">Clinic Management</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`
              w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200
              ${item.active ? "bg-cyan-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}
            `}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile & Logout */}
      <div className="flex-shrink-0 p-4 border-t bg-white">
        <div className="flex items-center space-x-3 p-3 mb-3">
          <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">DC</span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Dr. Clinical</h3>
            <p className="text-sm text-slate-500">Admin</p>
          </div>
        </div>

        <button className="w-full flex items-center space-x-3 p-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
