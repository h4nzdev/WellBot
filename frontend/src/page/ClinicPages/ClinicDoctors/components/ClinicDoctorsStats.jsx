import { User } from "lucide-react";
import React, { useContext } from "react";
import { DoctorContext } from "../../../../context/DoctorContext";

const ClinicDoctorsStats = () => {
  const { doctors } = useContext(DoctorContext);
  const activeDoctors = doctors?.filter((d) => d.status === "Active").length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Total Doctors
            </p>
            <p className="text-4xl font-semibold text-slate-800">
              {doctors?.length}
            </p>
          </div>
          <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Active Doctors
            </p>
            <p className="text-4xl font-semibold text-emerald-600">{activeDoctors}</p>
          </div>
          <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              On Leave
            </p>
            <p className="text-4xl font-semibold text-amber-600">1</p>
          </div>
          <div className="bg-amber-500 p-4 rounded-2xl shadow-md">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              New Doctors (30d)
            </p>
            <p className="text-4xl font-semibold text-cyan-600">1</p>
          </div>
          <div className="bg-cyan-500 p-4 rounded-2xl shadow-md">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDoctorsStats;
