"use client";

import { useState, useEffect, useContext } from "react";
import { Plus, BellRing, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/AuthContext";
import AddReminderModal from "../../../components/ClientComponents/AddReminderModal/AddReminderModal";
import ReminderDropdown from "../../../components/ClientComponents/ReminderDropdown/ReminderDropdown";

const ClientReminders = () => {
  const { user } = useContext(AuthContext);
  const [reminders, setReminders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reminderToEdit, setReminderToEdit] = useState(null);

  // Load reminders for this user
  useEffect(() => {
    const stored = localStorage.getItem(`reminders_${user._id}`);
    if (stored) setReminders(JSON.parse(stored));
  }, [user._id]);

  // Check reminder notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`;
      reminders.forEach((r) => {
        if (r.time === currentTime && r.isActive) {
          toast(`It's time for your reminder: ${r.name}`);
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [reminders]);

  const saveReminders = (updated) => {
    setReminders(updated);
    localStorage.setItem(`reminders_${user._id}`, JSON.stringify(updated));
    setReminderToEdit(null);
  };

  const handleSaveReminder = (reminder) => {
    const updated = reminderToEdit
      ? reminders.map((r) => (r.id === reminder.id ? reminder : r))
      : [...reminders, reminder];
    saveReminders(updated);
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this reminder?")) {
      const updated = reminders.filter((r) => r.id !== id);
      saveReminders(updated);
      toast.success("Reminder removed!");
    }
  };

  const handleEdit = (reminder) => {
    setReminderToEdit(reminder);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setReminderToEdit(null);
    setIsModalOpen(true);
  };

  // Stats
  const stats = {
    total: reminders.length,
    active: reminders.filter((r) => r.isActive).length,
    inactive: reminders.filter((r) => !r.isActive).length,
    today: reminders.length,
  };

  return (
    <>
      <div className="w-full min-h-screen bg-slate-50">
        <div className="mx-auto px-4">
          <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                My Reminders
              </h1>
              <p className="text-slate-600 mt-2 font-medium tracking-wide">
                Manage your personal health reminders.
              </p>
            </div>
            <button
              onClick={openModal}
              className="group flex items-center justify-center px-6 py-3 bg-cyan-600/90 text-white rounded-xl shadow-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Set New Reminder
            </button>
          </header>

          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-xl transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">{stats.total}</p>
                  <p className="text-slate-600 font-medium">Total Reminders</p>
                </div>
                <BellRing className="w-6 h-6 text-slate-600" />
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-xl transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-700">
                    {stats.active}
                  </p>
                  <p className="text-slate-600 font-medium">Active</p>
                </div>
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-xl transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-slate-600">
                    {stats.inactive}
                  </p>
                  <p className="text-slate-600 font-medium">Inactive</p>
                </div>
                <AlertCircle className="w-6 h-6 text-slate-500" />
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-xl transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-cyan-700">
                    {stats.today}
                  </p>
                  <p className="text-slate-600 font-medium">Due Today</p>
                </div>
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </section>

          {/* Reminders */}
          {reminders.length === 0 ? (
            <div className="text-center text-slate-600 font-medium mt-12">
              No reminders yet. Click "Set New Reminder" to add one!
            </div>
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reminders.map((r) => (
                <div
                  key={r.id}
                  className="bg-white/70 rounded-xl p-6 shadow flex flex-col hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-lg font-bold">{r.name}</p>
                    <span
                      className={`inline-flex items-center px-3 py-1.5 text-sm rounded-lg ${
                        r.isActive
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-slate-700 bg-slate-100"
                      }`}
                    >
                      <BellRing className="w-4 h-4 mr-1" />
                      {r.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <p className="text-cyan-700 font-bold">{r.time}</p>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => handleRemove(r.id)}
                      className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      Remove
                    </button>
                    <ReminderDropdown onEdit={() => handleEdit(r)} />
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>

      <ToastContainer />
      <AddReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveReminder}
        reminderToEdit={reminderToEdit}
      />
    </>
  );
};

export default ClientReminders;
