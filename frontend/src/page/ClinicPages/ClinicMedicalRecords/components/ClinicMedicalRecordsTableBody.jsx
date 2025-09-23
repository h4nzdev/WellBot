import { MoreHorizontal } from "lucide-react";

const ClinicMedicalRecordsTableBody = ({ records }) => {
    return (
      <tbody>
        {/* Record Row 1 */}
        {records?.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center py-8 text-slate-500">
              No medical records in this clinic found.
            </td>
          </tr>
        ) : (
          <>
            {records?.map((record) => (
              <tr className="hover:bg-slate-50 transition-colors border-t border-slate-200">
                <td className="py-4 px-4 font-mono text-slate-700">#0001</td>
                <td className="px-4 font-semibold text-slate-800">
                  {record?.patientId?.name}
                </td>
                <td className="px-4">{record.createdAt.slice(1, 10)}</td>
                <td className="px-4">{record.diagnosis}</td>
                <td className="px-4">{record.doctorId?.name}</td>
                <td className="px-4">
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md text-sm w-fit">
                    Reviewed
                  </span>
                </td>
                <td className="px-4 text-right">
                  <button
                    type="button"
                    className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center mx-auto"
                    disabled
                    aria-label="Actions"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </>
        )}
  
        {/* Add more rows as needed */}
      </tbody>
    );
  };
  
  export default ClinicMedicalRecordsTableBody;
  