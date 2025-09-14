'use client';

import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clinicId: "68c2c07c2f9364587b0792dd",
    doctorId: "68c2c756f2826845b73b825d",
    patientId: "68c366cac77f6e4ee5d7d08d",
    date: "2025-09-15T09:30:00.000Z",
    status: "scheduled",
  });

  const handleAddAppointment = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you would typically handle the API call to add the appointment
    toast.success("Appointment Added Successfully!");
    onClose(); // Close the modal after submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-300 border border-slate-200/50">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Add New Appointment
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Schedule a new appointment.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors duration-200 group"
          >
            <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleAddAppointment} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Clinic ID
            </label>
            <input
              type="text"
              name="clinicId"
              value={formData.clinicId}
              onChange={handleChange}
              className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Doctor ID
            </label>
            <input
              type="text"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Patient ID
            </label>
            <input
              type="text"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Date and Time
            </label>
            <input
              type="datetime-local"
              name="date"
              value={new Date(formData.date).toISOString().slice(0, 16)}
              onChange={handleChange}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
            >
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentModal;
