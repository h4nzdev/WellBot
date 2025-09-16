import { useState } from "react";

const banks = ["PayMaya", "Metrobank", "BDO", "GCash"];

export default function PaymentModal({ isOpen, onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [selectedBank, setSelectedBank] = useState(null);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    accountName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bankDetails);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select a Bank</h2>
            <div className="grid grid-cols-2 gap-4">
              {banks.map((bank) => (
                <button
                  key={bank}
                  onClick={() => handleBankSelect(bank)}
                  className="p-4 border rounded-lg hover:bg-gray-100"
                >
                  {bank}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Enter {selectedBank} Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={bankDetails.accountNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Name
                  </label>
                  <input
                    type="text"
                    name="accountName"
                    value={bankDetails.accountName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={bankDetails.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={bankDetails.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
}