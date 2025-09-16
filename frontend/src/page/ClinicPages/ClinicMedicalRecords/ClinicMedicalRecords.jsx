"use client";

import axios from "axios";
import {
  FileText,
  Plus,
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function ClinicMedicalRecords() {
  const [records, setRecords] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchRecords = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/medical-records/clinic/${user._id}`
      );
      setRecords(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                Medical Records
              </h1>
              <p className="text-slate-600 mt-1">
                View and manage patient medical records
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Records
                </p>
                <p className="text-4xl font-semibold text-slate-800">
                  {records?.length}
                </p>
              </div>
              <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Recent Records
                </p>
                <p className="text-4xl font-semibold text-emerald-600">
                  {records?.length}
                </p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Pending Reviews
                </p>
                <p className="text-4xl font-semibold text-amber-600">
                  {records?.length}
                </p>
              </div>
              <div className="bg-amber-500 p-4 rounded-2xl shadow-md">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search medical records..."
                  className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full"
                  disabled
                />
              </div>

              {/* Filter */}
              <button
                type="button"
                className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-transparent text-slate-700 cursor-not-allowed"
                disabled
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Add Button */}
            <button
              type="button"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
              disabled
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Record
            </button>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="font-semibold text-slate-700 py-4 px-4">
                    Record ID
                  </th>
                  <th className="font-semibold text-slate-700 px-4">
                    Patient Name
                  </th>
                  <th className="font-semibold text-slate-700 px-4">Date</th>
                  <th className="font-semibold text-slate-700 px-4">Type</th>
                  <th className="font-semibold text-slate-700 px-4">Doctor</th>
                  <th className="font-semibold text-slate-700 px-4">Status</th>
                  <th className="font-semibold text-slate-700 px-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
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
                        <td className="py-4 px-4 font-mono text-slate-700">
                          #0001
                        </td>
                        <td className="px-4 font-semibold text-slate-800">
                          {record?.patientId?.name}
                        </td>
                        <td className="px-4">
                          {record.createdAt.slice(1, 10)}
                        </td>
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
            </table>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <p>Showing 3 of 24 records</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
