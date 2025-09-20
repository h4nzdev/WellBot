import React, { useContext } from "react";
import { DoctorContext } from "../../../../context/DoctorContext";
import { AuthContext } from "../../../../context/AuthContext";
import DoctorActions from "../../../../components/ClinicComponents/DoctorActions/DoctorActions";

const ClinicDoctorsTableBody = ({ onEditDoctor }) => {
  const { doctors } = useContext(DoctorContext);
  const { user } = useContext(AuthContext);

  const clinicDoctors = doctors?.filter(
    (doctor) => doctor.clinicId?._id === user._id
  );

  return (
    <tbody>
      {clinicDoctors?.length > 0 ? (
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
              <DoctorActions 
                id={doctor._id}
                doctor={doctor}
                onEdit={() => onEditDoctor(doctor)}
              />
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
