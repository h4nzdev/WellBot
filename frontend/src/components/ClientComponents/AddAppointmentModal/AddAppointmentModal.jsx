"use client";

import { useContext, useState } from "react";
import { X, Calendar, Clock, User, Stethoscope } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DoctorContext } from "../../../context/DoctorContext";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const AddAppointmentModal = ({ isOpen, onClose }) => {
  const { doctors } = useContext(DoctorContext);
  const { user } = useContext(AuthContext);
  const doctorClinic = doctors?.filter(
    (doc) => doc.clinicId?._id === user.clinicId?._id
  );

  console.log(doctorClinic);

  const [formData, setFormData] = useState({
    doctorId: "",
    date: "",
    time: "",
    type: "consultation",
    status: "scheduled",
  });

  const appointmentTypes = [
    { value: "consultation", label: "Consultation" },
    { value: "follow-up", label: "Follow-up" },
    { value: "check-up", label: "Check-up" },
    { value: "surgery", label: "Surgery" },
    { value: "therapy", label: "Therapy" },
    { value: "vaccination", label: "Vaccination" },
    { value: "screening", label: "Screening" },
  ];

  const handleAddAppointment = async (e) => {
    e.preventDefault();

    // Combine date and time for the final submission
    const appointmentDateTime = `${formData.date}T${formData.time}:00.000Z`;
    const finalData = {
      ...formData,
      date: appointmentDateTime,
      clinicId: user.clinicId?._id, // from logged in clinic
      patientId: user._id,
    };

    console.log("Form Data:", finalData);
    const res = await axios.post(
      "http://localhost:3000/appointment/add-appointment",
      finalData
    );
    console.log(res.data.message);
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
                Schedule Appointment
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Book a new appointment with a doctor
              </p>
            </div>
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
          {/* Doctor Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Select Doctor
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white appearance-none"
                required
              >
                <option value="" disabled>
                  Choose a doctor...
                </option>
                {doctorClinic.map((doctor) => (
                  <option key={doctor._id} value={doctor._id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Appointment Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Appointment Type
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white appearance-none"
                required
              >
                {appointmentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white text-sm"
                  required
                />
              </div>
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white text-sm"
                  required
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!formData.doctorId || !formData.date || !formData.time}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentModal;
