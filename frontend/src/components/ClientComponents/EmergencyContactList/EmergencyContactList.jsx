
import React from "react";
import { User, Mail, Phone } from "lucide-react";

const EmergencyContactList = ({ contacts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Emergency Contacts
      </h2>
      {contacts.length === 0 ? (
        <div className="text-center text-slate-600 font-medium mt-12">
          No emergency contacts yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {contact.name}
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span>{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span>{contact.mobile}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmergencyContactList;
