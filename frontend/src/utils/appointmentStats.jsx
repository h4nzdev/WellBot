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
  switch (status.toLowerCase()) {
    case "approved":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "rejected":
      return "bg-red-100 text-red-700";
    case "cancelled":
      return "bg-gray-200 text-gray-700";
    case "rescheduled":
      return "bg-blue-100 text-blue-700";
    case "completed":
      return "bg-indigo-100 text-indigo-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
