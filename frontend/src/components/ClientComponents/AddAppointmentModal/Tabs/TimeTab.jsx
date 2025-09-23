"use client";

const TimeTab = ({ formData, setFormData, nextTab, prevTab }) => {
    // Define available time slots
    const timeSlots = [
      "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
      "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
      "16:00", "16:30",
    ];
  
    const handleTimeSelect = (time) => {
      setFormData((prev) => ({ ...prev, time }));
      nextTab();
    };
  
    return (
      <div>
        <h3 className="text-lg font-semibold text-center mb-6">Select a Time</h3>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleTimeSelect(time)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ease-in-out ${
                formData.time === time
                  ? "bg-cyan-500 text-white shadow-md scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-8">
            <button
                type="button"
                onClick={prevTab}
                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 font-medium"
            >
                Back
            </button>
        </div>
      </div>
    );
  };
  
  export default TimeTab;  
