import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { useState, useMemo } from "react";

export default function ClinicCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }, [currentDate]);

  const startingDay = useMemo(() => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  }, [currentDate]);

  const monthYear = useMemo(() => {
    return `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  }, [currentDate]);


  // Dummy appointments
  const appointments = [
    { date: new Date(2024, 6, 15), title: "Dr. Smith - Consultation" },
    { date: new Date(2024, 6, 15), title: "Dr. Jones - Check-up" },
    { date: new Date(2024, 6, 22), title: "Dr. Wilson - Follow-up" },
  ];

  const appointmentsForDate = (date) => {
    return appointments.filter(
      (appointment) =>
        appointment.date.getDate() === date.getDate() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getFullYear() === date.getFullYear()
    );
  };


  const isToday = (day) => new Date().toDateString() === day.toDateString();

  return (
    <div className="w-full mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-xl">
            <CalendarIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Appointments Calendar
            </h1>
            <p className="text-slate-600 mt-2">
              View and manage clinic appointments with ease.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
          <div className="flex justify-between items-center">
            <button 
              onClick={prevMonth} 
              className="p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {monthYear}
            </h2>
            <button 
              onClick={nextMonth} 
              className="p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-7 gap-1 text-center mb-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-3 px-1 font-semibold text-sm text-slate-700 bg-slate-100 rounded-xl">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startingDay }).map((_, index) => (
              <div key={`empty-${index}`} className="border border-slate-200 rounded-xl p-3 h-36 bg-slate-50"></div>
            ))}
            {daysInMonth.map((day, index) => (
              <div
                key={index}
                className={`border-2 rounded-xl p-3 h-36 flex flex-col transition-all duration-200 cursor-pointer hover:shadow-md hover:border-slate-300 ${
                  isToday(day) 
                    ? "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-400 shadow-lg" 
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
                onClick={() => {/* Optional: Add click handler for day selection */}}
              >
                <span 
                  className={`font-bold text-lg mb-2 ${
                    isToday(day) ? 'text-cyan-700' : 'text-slate-900'
                  }`}
                >
                  {day.getDate()}
                </span>
                <div className="flex-1 overflow-y-auto space-y-1">
                  {appointmentsForDate(day).map((appointment, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-medium rounded-lg p-2 shadow-sm border border-cyan-200 truncate"
                    >
                      {appointment.title}
                    </div>
                  ))}
                </div>
                {appointmentsForDate(day).length > 0 && !isToday(day) && (
                  <div className="mt-auto pt-1">
                    <div className="w-full h-1 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}