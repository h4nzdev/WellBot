"use client";

import { useState } from "react";
import {
  Users,
  Calendar,
  CreditCard,
  Menu,
  X,
  Stethoscope,
  Settings,
  Bell,
  Crown,
  Zap,
  CheckCircle,
  User,
  Activity,
  BarChart3,
  UserCheck,
  TrendingUp,
  DollarSign,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Plus,
  Download,
  MoreHorizontal,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

// Header Component
const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-800">DocPortal</span>
        </div>
        <div className="flex items-center space-x-2">
          <Bell className="h-6 w-6 text-gray-500" />
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const navigation = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "clients", name: "Clients", icon: Users },
    { id: "doctors", name: "Doctors", icon: UserCheck },
    { id: "appointments", name: "Appointments", icon: Calendar },
    { id: "plans", name: "Plans", icon: CreditCard },
  ];

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">DocPortal</span>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    activeTab === item.id
                      ? "bg-blue-100 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </button>
        </div>
      </nav>
    </div>
  );
};

// Dashboard Component
const DashboardView = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your practice statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Today's Appointments
              </p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Monthly Growth
              </p>
              <p className="text-2xl font-bold text-gray-900">+12%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Monthly Revenue
              </p>
              <p className="text-2xl font-bold text-gray-900">$24,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Appointment completed with Sarah Johnson
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                New client registered: Michael Chen
              </p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <Calendar className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Appointment scheduled for Emily Davis
              </p>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientsView = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
        <p className="text-gray-600">
          Manage your patient records and information
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Locations</option>
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>Houston, TX</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Patient
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-500">ID: #12345</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 123-4567</div>
                <div className="text-sm text-gray-500">
                  sarah.johnson@email.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                New York, NY
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                March 10, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-500">ID: #12346</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 987-6543</div>
                <div className="text-sm text-gray-500">
                  michael.chen@email.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Los Angeles, CA
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                March 8, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Emily Davis
                    </div>
                    <div className="text-sm text-gray-500">ID: #12347</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 456-7890</div>
                <div className="text-sm text-gray-500">
                  emily.davis@email.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Chicago, IL
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                March 5, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      James Wilson
                    </div>
                    <div className="text-sm text-gray-500">ID: #12348</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 321-9876</div>
                <div className="text-sm text-gray-500">
                  james.wilson@email.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Houston, TX
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                March 12, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DoctorsView = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
        <p className="text-gray-600">
          Manage doctor profiles and specializations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Specializations</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
                <option>Dermatology</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Available</option>
                <option>Busy</option>
                <option>Off Duty</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Doctor
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Specialization
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Dr. Robert Smith
                    </div>
                    <div className="text-sm text-gray-500">ID: #DOC001</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Cardiology</div>
                <div className="text-sm text-gray-500">Heart Specialist</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 111-2222</div>
                <div className="text-sm text-gray-500">
                  dr.smith@hospital.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                15 years
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Available
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Dr. Maria Garcia
                    </div>
                    <div className="text-sm text-gray-500">ID: #DOC002</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Pediatrics</div>
                <div className="text-sm text-gray-500">Child Care</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 333-4444</div>
                <div className="text-sm text-gray-500">
                  dr.garcia@hospital.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                12 years
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Available
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Dr. David Lee
                    </div>
                    <div className="text-sm text-gray-500">ID: #DOC003</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Orthopedics</div>
                <div className="text-sm text-gray-500">Bone & Joint</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 555-6666</div>
                <div className="text-sm text-gray-500">dr.lee@hospital.com</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                8 years
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Busy
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Dr. Sarah Brown
                    </div>
                    <div className="text-sm text-gray-500">ID: #DOC004</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Dermatology</div>
                <div className="text-sm text-gray-500">Skin Care</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">(555) 777-8888</div>
                <div className="text-sm text-gray-500">
                  dr.brown@hospital.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                10 years
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Available
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AppointmentsView = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600">
          Manage your upcoming and past appointments
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search appointments..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="date"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Scheduled</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Doctors</option>
                <option>Dr. Robert Smith</option>
                <option>Dr. Maria Garcia</option>
                <option>Dr. David Lee</option>
                <option>Dr. Sarah Brown</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
            <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-500">ID: #12345</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Dr. Robert Smith</div>
                <div className="text-sm text-gray-500">Cardiology</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Today, March 15</div>
                <div className="text-sm text-gray-500">10:00 AM - 10:30 AM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                General Checkup
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Confirmed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <X className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-500">ID: #12346</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Dr. Maria Garcia</div>
                <div className="text-sm text-gray-500">Pediatrics</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Tomorrow, March 16</div>
                <div className="text-sm text-gray-500">2:00 PM - 2:45 PM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Follow-up Consultation
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <X className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Emily Davis
                    </div>
                    <div className="text-sm text-gray-500">ID: #12347</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Dr. David Lee</div>
                <div className="text-sm text-gray-500">Orthopedics</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">March 18</div>
                <div className="text-sm text-gray-500">11:30 AM - 12:00 PM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Specialist Referral
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Scheduled
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <X className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      James Wilson
                    </div>
                    <div className="text-sm text-gray-500">ID: #12348</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Dr. Sarah Brown</div>
                <div className="text-sm text-gray-500">Dermatology</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">March 20</div>
                <div className="text-sm text-gray-500">3:00 PM - 3:30 PM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Skin Consultation
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Confirmed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-900 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 p-1 rounded">
                    <X className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Plans Component
const PlansView = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Subscription Plans</h1>
        <p className="text-gray-600">
          Choose the perfect plan for your practice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Basic Plan</h3>
              <p className="text-sm text-gray-500">
                Perfect for small practices
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Up to 50 patients</p>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Up to 50 patients
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Basic appointment scheduling
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Patient records management
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Email support
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Mobile app access
            </li>
          </ul>

          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Choose Basic Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-blue-500 p-6 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Most Popular
            </span>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Crown className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Premium Plan</h3>
              <p className="text-sm text-gray-500">For growing practices</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">$199</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Up to 150 patients</p>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Up to 150 patients
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Advanced scheduling
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Detailed analytics
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Priority support
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Custom templates
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Prescription management
            </li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Choose Premium Plan
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const ClinicPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView />;
      case "clients":
        return <ClientsView />;
      case "doctors":
        return <DoctorsView />;
      case "appointments":
        return <AppointmentsView />;
      case "plans":
        return <PlansView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Desktop header */}
        <div className="hidden lg:block bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <Activity className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                Doctor Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500" />
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default ClinicPage;
