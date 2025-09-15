import {
  Ban,
  CalendarCheck,
  CheckCheck,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

export const getStatusIcon = (status) => {
  switch (status) {
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "accepted":
      return <CheckCircle className="w-4 h-4" />;
    case "rejected":
      return <XCircle className="w-4 h-4" />;
    case "scheduled":
      return <CalendarCheck className="w-4 h-4" />;
    case "completed":
      return <CheckCheck className="w-4 h-4" />;
    case "cancelled":
      return <Ban className="w-4 h-4" />;
    default:
      return <CheckCircle className="w-4 h-4" />;
  }
};

export const getStatusBadge = (status) => {
  const statusConfig = {
    pending: "text-amber-700 bg-amber-50 border border-amber-200",
    accepted: "text-green-700 bg-green-50 border border-green-200",
    rejected: "text-red-700 bg-red-50 border border-red-200",
    scheduled: "text-blue-700 bg-blue-50 border border-blue-200",
    completed: "text-purple-700 bg-purple-50 border border-purple-200",
    cancelled: "text-gray-700 bg-gray-50 border border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit capitalize ${
        statusConfig[status] ||
        "text-slate-700 bg-slate-100 border border-slate-200"
      }`}
    >
      {getStatusIcon(status)}
      {status}
    </span>
  );
};
