import { CheckCircle, Clock } from "lucide-react";

export const getStatusBadge = (status) => {
  const statusConfig = {
    pending: "text-amber-700 bg-amber-50 border border-amber-200",
    accepted: "text-green-700 bg-green-50 border border-green-200",
    rejected: "text-red-700 bg-red-50 border border-red-200",
    scheduled: "text-blue-700 bg-blue-50 border border-blue-200",
    completed: "text-purple-700 bg-purple-50 border border-purple-200",
    cancelled: "text-gray-700 bg-gray-50 border border-gray-200",
  };

  const icons = {
    confirmed: <CheckCircle className="w-4 h-4" />,
    pending: <Clock className="w-4 h-4" />,
    completed: <CheckCircle className="w-4 h-4" />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium shadow-sm ${statusConfig[status]}`}
    >
      {icons[status]}
      <span className="ml-1 capitalize">{status}</span>
    </span>
  );
};
