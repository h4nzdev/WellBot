import PatientActions from "../../../../components/ClinicComponents/PatientActions/PatientActions";


const ClinicPatientsTableBody = ({ patients }) => {
  return (
    <tbody>
      {patients.length > 0 ? (
        patients.map((patient) => (
          <tr
            key={patient._id}
            className="hover:bg-slate-50 transition-colors border-t border-slate-200"
          >
            <td className="py-4 px-4">
              <p className="font-semibold text-slate-800">{patient.name}</p>
            </td>
            <td className="px-4">{patient.age}</td>
            <td className="px-4 capitalize">{patient.gender}</td>
            <td className="px-4 text-slate-700">{patient.phone}</td>
            <td className="px-4 text-slate-500">{patient.email}</td>
            <td className="px-4">{patient.address}</td>
            <td className="px-4 text-center">
              <PatientActions id={patient._id} />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center py-8 text-slate-500">
            No patients found.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ClinicPatientsTableBody;
