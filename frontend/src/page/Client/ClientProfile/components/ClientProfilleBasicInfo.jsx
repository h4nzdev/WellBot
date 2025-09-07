import { Calendar, Mail, Phone, User } from "lucide-react";

const ClientProfilleBasicInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="text-center">
        <div className="bg-green-100 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
          <User className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
        <p className="text-gray-600">Patient ID: HC001234</p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg cursor-default select-none">
          <Mail className="h-4 w-4 mr-2" />
          Profile View Only
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center text-gray-600">
          <Mail className="h-4 w-4 mr-3" />
          <span className="text-sm">john.doe@email.com</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-3" />
          <span className="text-sm">(555) 123-4567</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-3" />
          <span className="text-sm">Member since Jan 2024</span>
        </div>
      </div>
    </div>
  );
};

export default ClientProfilleBasicInfo;
