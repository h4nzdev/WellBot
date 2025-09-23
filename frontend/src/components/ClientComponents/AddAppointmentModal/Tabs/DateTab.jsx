"use client";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateTab = ({ formData, setFormData, nextTab }) => {
  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
    nextTab();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-center mb-4">Select a Date</h3>
      <div className="flex justify-center">
        <Calendar
          onChange={handleDateChange}
          value={formData.date}
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DateTab;
