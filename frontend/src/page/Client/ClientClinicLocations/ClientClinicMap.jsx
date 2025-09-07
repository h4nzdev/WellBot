import {
  MapPin,
  Building,
  Star,
  Navigation,
  Phone,
  Clock,
  Users,
} from "lucide-react";
import ClientMapLocation from "./components/ClientMapLocation";
import ClientClinicList from "./components/ClientClinicList";
import ClientMapClinicDetails from "./components/ClientMapClinicDetails";

const ClientClinicMap = () => {
  // Static selected clinic
  const selectedClinic = "green-valley";

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Clinic Locations
        </h1>
        <p className="text-gray-600 mt-1">
          Find healthcare facilities near you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Mock Map */}
            <ClientMapLocation />
          </div>
        </div>

        {/* Clinic List */}
        <div className="lg:col-span-1">
          <ClientClinicList />

          {/* Clinic Details */}
          <ClientMapClinicDetails />
        </div>
      </div>
    </div>
  );
};

export default ClientClinicMap;
