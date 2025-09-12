import React from "react";
import { FolderOpen, Download, Eye } from "lucide-react";

const ClientMedicalRecords = () => {
  const records = [
    {
      date: "2024-08-25",
      doctor: "Dr. Sarah Wilson",
      reason: "Follow-up Consultation",
    },
    {
      date: "2024-07-12",
      doctor: "Dr. Michael Brown",
      reason: "Annual Check-up",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto p-6 max-w-7xl">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                Medical Records
              </h1>
              <p className="text-slate-600 mt-1">
                Access your appointment history and medical records.
              </p>
            </div>
            <button className="flex items-center justify-center p-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-700 transition-all duration-300">
              <Download className="w-6 h-6 mr-2" />
              Download All Records
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((record, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 hover:shadow-cyan-100 transition-shadow"
            >
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-slate-800">
                  {record.doctor}
                </p>
                <p className="text-cyan-600 font-medium">{record.date}</p>
                <div className="my-4 h-px bg-slate-200"></div>
                <p className="text-slate-700 mb-4">{record.reason}</p>
                <button className="mt-auto flex items-center justify-center p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClientMedicalRecords;
