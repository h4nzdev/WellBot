import { X, Calendar, Clock, User, MessageSquare } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/AuthContext";
import { DoctorContext } from "../../../context/DoctorContext";
import { AppointmentContext } from "../../../context/AppointmentContext";

const AddAppointmentModal = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
  const { doctors } = useContext(DoctorContext);
  const { fetchAppointments } = useContext(AppointmentContext);

  const [formData, setFormData] = useState({
    patientId: user?._id,
    clinicId: "",
    doctorId: "",
    date: "",
    time: "",
    type: "",
  });

  useEffect(() => {
    if (doctors.length > 0) {
      setFormData((prev) => ({
        ...prev,
        clinicId: doctors[0].clinicId,
      }));
    }
  }, [doctors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/appointment/add", formData);
      toast.success("Appointment requested successfully!");
      fetchAppointments();
      onClose();
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error requesting appointment");
      }
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg mx-4 md:mx-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            New Appointment
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors p-2 rounded-full hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Doctor Select */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                required
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                {doctors.map((doctor) => (
                  <option key={doctor._id} value={doctor._id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Appointment Type */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="type"
                placeholder="Reason (e.g., Check-up)"
                value={formData.type}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Input */}
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                required
              />
            </div>

            {/* Time Input */}
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg text-slate-600 font-semibold hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentModal;
