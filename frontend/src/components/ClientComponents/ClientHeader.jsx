import { Sidebar, User, Bell } from "lucide-react";

const ClientHeader = ({ setIsOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left: Sidebar + Page Title */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Sidebar
              color="gray"
              onClick={() => setIsOpen(true)}
              className="h-6 w-6 text-gray-700 lg:hidden"
            />
          </button>
          <h1 className="text-lg font-bold text-gray-800">Clinic</h1>
        </div>

        {/* Right: User Info + Notifications */}
        <div className="flex items-center md:space-x-4 space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-700">John Doe</span>
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
