import React, { useState } from "react";

const AppointmentActions = ({ appointmentId, onComplete, onCancel, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = (action) => {
    action(appointmentId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="p-2 hover:bg-slate-100 rounded-md text-slate-500"
        aria-label="More"
        onClick={handleToggle}
      >
        <MoreHorizontal className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
          <a
            href="#"
            onClick={() => handleAction(onComplete)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Mark as complete
          </a>
          <a
            href="#"
            onClick={() => handleAction(onCancel)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Cancelled
          </a>
          <a
            href="#"
            onClick={() => handleAction(onDelete)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Delete
          </a>
        </div>
      )}
    </div>
  );
};

export default AppointmentActions;