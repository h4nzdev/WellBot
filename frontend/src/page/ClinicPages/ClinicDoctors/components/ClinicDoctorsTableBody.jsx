import { MoreHorizontal } from "lucide-react";
import React, { useContext } from "react";
import { DoctorContext } from "../../../../context/DoctorContext";
import { AuthContext } from "../../../../context/AuthContext";

const ClinicDoctorsTableBody = () => {
  const { doctors } = useContext(DoctorContext);
  const { user } = useContext(AuthContext);

  const clinicDoctors = doctors.filter((doctor) => doctor.clinicId === user._id);

  return (
    <tbody>
      {clinicDoctors.length > 0 ? (
        clinicDoctors.map((doctor) => (
          <tr
            key={doctor._id}
            className="hover:bg-slate-50 transition-colors border-t border-slate-200"
          >
            <td className="py-4 px-4">
              <p className="font-semibold text-slate-800">{doctor.name}</p>
            </td>
            <td className="px-4">{doctor.specialty}</td>
            <td className="px-4 text-slate-700">{doctor.phone}</td>
            <td className="px-4 text-slate-500">{doctor.email}</td>
            <td className="px-4">
              <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md text-sm w-fit">
                {doctor.status}
              </span>
            </td>
            <td className="px-4 text-center">
              <button
                type="button"
                className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center"
                disabled
                aria-label="Actions"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center py-8 text-slate-500">
            No doctors found.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ClinicDoctorsTableBody;
