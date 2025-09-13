"use client";

import {
  BellRing,
  Plus,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Edit3,
  Trash2,
  Bell,
  ChevronDown,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "react-toastify/dist/ReactToastify.css";

const ClientReminders = () => {
  // State for editing reminder
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editReminder, setEditReminder] = useState({
    reminder: "",
    time: "",
    status: "Active",
    notifyCount: 0,
  });
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Get userId from sessionStorage (simulate per-user reminders)
  const userId = sessionStorage.getItem("user") || "defaultUser";

  // Load reminders from localStorage for this user
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem(`reminders_${userId}`);
    return saved ? JSON.parse(saved) : [];
  });

  // State for new reminder form
  const [newReminder, setNewReminder] = useState({
    reminder: "",
    time: "",
    status: "Active",
  });

  // Save reminders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`reminders_${userId}`, JSON.stringify(reminders));
  }, [reminders, userId]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Stats for UI
  const stats = {
    total: reminders.length,
    active: reminders.filter((r) => r.status === "Active").length,
    inactive: reminders.filter((r) => r.status === "Inactive").length,
    today: reminders.filter((r) => isToday(r.time)).length,
  };

  // Helper to check if reminder is for today
  function isToday(timeStr) {
    if (!timeStr) return false;
    // Accepts "HH:mm" or "HH:mm AM/PM"
    // For demo, always return true for simplicity
    return true;
  }

  // Check reminders every minute for realtime notification
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminders.forEach((rem) => {
        if (rem.status !== "Active") return;
        // Parse time string (expects "HH:mm" in 24hr or "HH:mm AM/PM")
        const reminderTime = parseTime(rem.time);
        if (!reminderTime) return;
        if (
          now.getHours() === reminderTime.getHours() &&
          now.getMinutes() === reminderTime.getMinutes()
        ) {
          toast.info(`Reminder: ${rem.reminder}`);
        }
      });
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [reminders]);

  // Parse time string to Date object (beginner friendly)
  function parseTime(timeStr) {
    if (!timeStr) return null;
    // Accepts "HH:mm" or "HH:mm AM/PM"
    const d = new Date();
    const [time, period] = timeStr.split(" ");
    let [h, m] = time.split(":");
    h = Number.parseInt(h);
    m = Number.parseInt(m);
    if (period) {
      if (period.toUpperCase() === "PM" && h < 12) h += 12;
      if (period.toUpperCase() === "AM" && h === 12) h = 0;
    }
    d.setHours(h);
    d.setMinutes(m);
    d.setSeconds(0);
    return d;
  }

  // Add new reminder
  // Add new reminder (from modal)
  function handleAddReminder(e) {
    e.preventDefault();
    if (!newReminder.reminder || !newReminder.time) {
      toast.error("Please enter reminder and time");
      return;
    }
    setReminders([...reminders, newReminder]);
    setNewReminder({ reminder: "", time: "", status: "Active" });
    toast.success("Reminder added!");
    setIsModalOpen(false); // Close modal after adding
  }

  // Remove reminder by index
  function handleRemoveReminder(idx) {
    setOpenDropdown(null); // Close dropdown when removing
    Swal.fire({
      title: "Are you sure you want to remove this reminder?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        setReminders(reminders.filter((_, i) => i !== idx));
        toast.info("Reminder removed");
      }
    });
  }

  // Open edit modal for a reminder
  function handleViewOptions(idx) {
    setOpenDropdown(null); // Close dropdown when editing
    setEditIndex(idx);
    setEditReminder({
      ...reminders[idx],
      notifyCount: reminders[idx].notifyCount || 0,
    });
    setEditModalOpen(true);
  }

  // Save edited reminder
  function handleEditReminder(e) {
    e.preventDefault();
    const updated = [...reminders];
    updated[editIndex] = { ...editReminder };
    setReminders(updated);
    setEditModalOpen(false);
    toast.success("Reminder updated!");
  }

  // Notify button increments count and shows toast
  function handleNotify() {
    setEditReminder((r) => {
      const newCount = (r.notifyCount || 0) + 1;
      toast.info(`You acknowledged: ${r.reminder} (${newCount} times)`);
      return { ...r, notifyCount: newCount };
    });
  }

  function toggleDropdown(index) {
    setOpenDropdown(openDropdown === index ? null : index);
  }

  return (
    <>
      {/* Toastify container for notifications */}
      <ToastContainer position="top-right" autoClose={2000} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-300 border border-slate-200/50">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Add New Reminder
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Set up your personal health reminder
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors duration-200 group"
              >
                <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <form onSubmit={handleAddReminder} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Reminder Message
                </label>
                <input
                  type="text"
                  name="reminder"
                  value={newReminder.reminder}
                  onChange={(e) =>
                    setNewReminder((r) => ({ ...r, reminder: e.target.value }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                  placeholder="Enter your reminder..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Reminder Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={newReminder.time}
                  onChange={(e) =>
                    setNewReminder((r) => ({ ...r, time: e.target.value }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Status
                </label>
                <select
                  name="status"
                  value={newReminder.status}
                  onChange={(e) =>
                    setNewReminder((r) => ({ ...r, status: e.target.value }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Add Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="w-full min-h-screen bg-slate-50">
        <div className="mx-auto p-6">
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                  My Reminders
                </h1>
                <p className="text-slate-600 mt-2 font-medium tracking-wide">
                  Manage your personal health reminders.
                </p>
              </div>
              {/* Button to open modal */}
              <button
                className="group flex items-center justify-center px-6 py-3 bg-cyan-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:bg-cyan-700 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto border border-cyan-500/20"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">
                  Set New Reminder
                </span>
              </button>
            </div>
          </header>

          {/* Stats section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-800 tracking-tight">
                    {stats.total}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Total Reminders
                  </p>
                </div>
                <div className="p-3 bg-slate-100/80 rounded-lg">
                  <BellRing className="w-6 h-6 text-slate-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-emerald-700 tracking-tight">
                    {stats.active}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Active
                  </p>
                </div>
                <div className="p-3 bg-emerald-100/80 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-600 tracking-tight">
                    {stats.inactive}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Inactive
                  </p>
                </div>
                <div className="p-3 bg-slate-100/80 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-cyan-700 tracking-tight">
                    {stats.today}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Due Today
                  </p>
                </div>
                <div className="p-3 bg-cyan-100/80 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Reminders list */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-lg font-bold text-slate-800 tracking-tight leading-tight">
                    {reminder.reminder}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                      reminder.status === "Active"
                        ? "text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 shadow-sm"
                        : "text-slate-700 bg-slate-100/80 border border-slate-200/50 shadow-sm"
                    }`}
                  >
                    <BellRing className="w-4 h-4" />
                    {reminder.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <p className="text-cyan-700 font-bold tracking-wide">
                    {reminder.time}
                  </p>
                </div>
                <div className="mt-auto flex gap-2">
                  {/* Remove button for beginners */}
                  <button
                    onClick={() => handleRemoveReminder(index)}
                    className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Remove
                  </button>

                  <div className="relative flex-1" ref={dropdownRef}>
                    <button
                      className="group w-full flex items-center justify-center px-4 py-3 bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-slate-200/80 hover:shadow-md hover:scale-105 transition-all duration-300 border border-slate-200/50"
                      onClick={() => toggleDropdown(index)}
                    >
                      <MoreVertical className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      <span className="font-semibold tracking-wide flex-1">
                        Options
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200/50 z-10 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                        <button
                          onClick={() => handleViewOptions(index)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-200 text-slate-700 border-b border-slate-100"
                        >
                          <Edit3 className="w-4 h-4 text-cyan-600" />
                          <span className="font-medium">Edit Reminder</span>
                        </button>
                        <button
                          onClick={() => {
                            setOpenDropdown(null);
                            const updatedReminders = [...reminders];
                            updatedReminders[index] = {
                              ...updatedReminders[index],
                              notifyCount:
                                (updatedReminders[index].notifyCount || 0) + 1,
                            };
                            setReminders(updatedReminders);
                            toast.info(
                              `You acknowledged: ${reminder.reminder}`
                            );
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-200 text-slate-700 border-b border-slate-100"
                        >
                          <Bell className="w-4 h-4 text-amber-600" />
                          <span className="font-medium">
                            Acknowledge ({reminder.notifyCount || 0})
                          </span>
                        </button>
                        <button
                          onClick={() => handleRemoveReminder(index)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 transition-colors duration-200 text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="font-medium">Delete Reminder</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      {editModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-300 border border-slate-200/50">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Edit Reminder
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Update your reminder details
                </p>
              </div>
              <button
                onClick={() => setEditModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors duration-200 group"
              >
                <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <form onSubmit={handleEditReminder} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Reminder Message
                </label>
                <input
                  type="text"
                  name="reminder"
                  value={editReminder.reminder}
                  onChange={(e) =>
                    setEditReminder((r) => ({
                      ...r,
                      reminder: e.target.value,
                    }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Reminder Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={editReminder.time}
                  onChange={(e) =>
                    setEditReminder((r) => ({
                      ...r,
                      time: e.target.value,
                    }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                  Status
                </label>
                <select
                  name="status"
                  value={editReminder.status}
                  onChange={(e) =>
                    setEditReminder((r) => ({
                      ...r,
                      status: e.target.value,
                    }))
                  }
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-white"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleNotify}
                  className="px-4 py-3 bg-amber-50 text-amber-700 rounded-xl border border-amber-200 hover:bg-amber-100 transition-all duration-200 font-semibold flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Notify ({editReminder.notifyCount || 0})
                </button>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientReminders;
