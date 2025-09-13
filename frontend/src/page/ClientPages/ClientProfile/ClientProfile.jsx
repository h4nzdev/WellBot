import React from "react";

const ClientProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Client"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="font-medium">First Name</p>
              <p className="text-gray-600">John</p>
            </div>
            <div>
              <p className="font-medium">Last Name</p>
              <p className="text-gray-600">Doe</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">123-456-7890</p>
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">123 Main St, Anytown, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;