
import React, { useState, useRef, useEffect, useContext } from 'react';
import { MoreVertical, Edit3, Bell, UserPlus, ChevronDown } from 'lucide-react';
import AddEmergencyContactModal from '../AddEmergencyContactModal/AddEmergencyContactModal'; 
import { AuthContext } from '../../../context/AuthContext';

const ReminderDropdown = ({ onEdit, onNotified }) => { 
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddEmergencyContact = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const handleSaveContact = (newContact) => {
    if (user && user._id) {
      const existingContacts = JSON.parse(localStorage.getItem(`emergencyContacts_${user._id}`)) || [];
      const updatedContacts = [...existingContacts, newContact];
      localStorage.setItem(`emergencyContacts_${user._id}`, JSON.stringify(updatedContacts));
    }
  };


  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="dropdown-btn group w-full flex items-center justify-center px-4 py-3 bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-slate-200/80 hover:shadow-md hover:scale-105 transition-all duration-300 border border-slate-200/50"
        type="button"
      >
        <MoreVertical className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
        <span className="font-semibold tracking-wide flex-1">
            Options
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onEdit(); setIsOpen(false); }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onNotified(); setIsOpen(false); }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notified
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleAddEmergencyContact(); }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add emergency contact
            </a>
          </div>
        </div>
      )}
       <AddEmergencyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveContact}
        user={user}
      />
    </div>
  );
};

export default ReminderDropdown;
