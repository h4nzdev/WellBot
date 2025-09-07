import { Calendar, Mail, Phone, User } from "lucide-react";
import ClientProfilleBasicInfo from "./components/ClientProfilleBasicInfo";
import ClientProfileEmergencyContact from "./components/ClientProfileEmergencyContact";
import ClientProfileDetailedInfoForm from "./components/ClientProfileDetailedInfoForm";
import ClientProfileInsuranceInfo from "./components/ClientProfileInsuranceInfo";

const ClientProfile = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Profile
        </h1>
        <p className="text-gray-600 mt-1">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Profile Picture & Basic Info */}
        <div className="lg:col-span-1">
          <ClientProfilleBasicInfo />

          {/* Emergency Contact */}
          <ClientProfileEmergencyContact />
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2">
          <ClientProfileDetailedInfoForm />

          {/* Insurance Information */}
          <ClientProfileInsuranceInfo />
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
