import { MoreHorizontal } from "lucide-react";
import React, { useContext } from "react";
import { PatientsContext } from "../../../../context/PatientsContext";
import { AuthContext } from "../../../../context/AuthContext";

const ClinicPatientsTableBody = () => {
  const { patients } = useContext(PatientsContext);
  const { user } = useContext(AuthContext);

  const clinicPatients = patients.filter(
    (patient) => patient.clinicId === user._id
  );

  return (
    <tbody>
      {clinicPatients.map((patient) => (
        <tr
          key={patient._id}
          className="hover:bg-slate-50 transition-colors border-t border-slate-200"
        >
          <td className="py-4 px-4">
            <p className="font-semibold text-slate-800">{patient.name}</p>
          </td>
          <td className="px-4">{patient.age}</td>
          <td className="px-4">{patient.gender}</td>
          <td className="px-4 text-slate-700">{patient.phone}</td>
          <td className="px-4 text-slate-500">{patient.email}</td>
          <td className="px-4">{patient.address}</td>
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
      ))}
    </tbody>
  );
};

export default ClinicPatientsTableBody;
