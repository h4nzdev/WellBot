'use client';

import { User, Stethoscope } from 'lucide-react';

const DetailsTab = ({ formData, setFormData, doctors, appointmentTypes, prevTab }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
        <div>
            <label htmlFor="doctorId" className="block text-sm font-medium text-slate-700 mb-2">Select Doctor</label>
            <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                id="doctorId"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white appearance-none"
                required
                >
                <option value="" disabled>Choose a doctor...</option>
                {doctors.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                    {doctor.name} - {doctor.specialty}
                    </option>
                ))}
                </select>
            </div>
        </div>

        <div>
            <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">Appointment Type</label>
            <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white appearance-none"
                required
                >
                {appointmentTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                ))}
                </select>
            </div>
        </div>
        <div className="flex justify-between mt-8">
            <button
                type="button"
                onClick={prevTab}
                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-medium"
            >
                Back
            </button>
        </div>
    </div>
  );
};

export default DetailsTab;
