import { Download, Eye, FileText, Calendar, User, Clock } from "lucide-react";
import useMedicalRecords from "../../../hooks/medicalRecords";
import { useState } from "react";
import MedicalRecordsModal from "../../../components/ClientComponents/MedicalRecordsModal/MedicalRecordsModal";
import { handleDownloadAll } from "../../../utils/handles";


const ClientMedicalRecords = () => {
  const { records } = useMedicalRecords();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openModal = (record) => {
    setSelectedRecord(record);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedRecord(null);
  };

  const stats = [
    {
      title: "Total Records",
      value: records.length.toString(),
      icon: FileText,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
    },
    {
      title: "This Year",
      value: null,
      icon: Calendar,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      title: "Doctors Seen",
      value: null,
      icon: User,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Last Visit",
      value: "Aug 25",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                Medical Records
              </h1>
              <p className="text-slate-600 mt-2 text-lg font-medium">
                Access your appointment history and medical records.
              </p>
            </div>
            <button
              onClick={() => handleDownloadAll(records)}
              className="group flex items-center justify-center px-6 py-3 bg-cyan-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:bg-cyan-700 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto border border-cyan-500/20"
            >
              <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold tracking-wide">
                Download All Records
              </span>
            </button>
          </div>
        </header>

        <section className="mb-8">
          <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`${stat.bgColor} backdrop-blur-sm rounded-xl p-6 border ${stat.borderColor} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                        {stat.title}
                      </p>
                      <p className={`text-2xl font-bold ${stat.color} mt-1`}>
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-3 ${stat.bgColor} rounded-lg border ${stat.borderColor}`}
                    >
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records?.map((record, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 flex flex-col hover:shadow-xl hover:shadow-cyan-100/50 hover:scale-105 hover:border-cyan-200/50 transition-all duration-300"
            >
              <div className="flex-grow">
                <p className="text-xl font-bold text-slate-800 tracking-tight">
                  {record.doctorId?.name}
                </p>
                <p className="text-cyan-600 font-semibold text-sm tracking-wide uppercase mt-1">
                  {record.createdAt.slice(1, 10)}
                </p>
                <div className="my-4 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
                <p className="text-slate-700 mb-4 font-medium leading-relaxed">
                  {record.diagnosis}
                </p>
              </div>
              <button
                onClick={() => openModal(record)}
                className="mt-auto flex items-center justify-center p-3 bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-slate-200 hover:shadow-md group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-all duration-300 border border-slate-200/50"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">
                  View Details
                </span>
              </button>
            </div>
          ))}
        </section>
      </div>
      <MedicalRecordsModal
        isOpen={isOpen}
        setIsOpen={closeModal}
        record={selectedRecord}
      />
    </div>
  );
};

export default ClientMedicalRecords;
