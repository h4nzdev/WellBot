import { Stethoscope, Heart, Users, Activity } from "lucide-react";
import ClientAppointmentForm from "./components/ClientAppointmentForm";
import ClientAppointmentAvailableDoctors from "./components/ClientAppointmentAvailableDoctors";
import ClientAppointmentTips from "./components/ClientAppointmentTips";

const ClientBookAppointment = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Book Appointment
        </h1>
        <p className="text-gray-600 mt-1">
          Schedule your next visit with our healthcare professionals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Appointment Form */}
        <ClientAppointmentForm />

        {/* Available Doctors */}
        <div className="lg:col-span-1">
          <ClientAppointmentAvailableDoctors />

          {/* Appointment Tips */}
          <ClientAppointmentTips />
        </div>
      </div>
    </div>
  );
};

export default ClientBookAppointment;
