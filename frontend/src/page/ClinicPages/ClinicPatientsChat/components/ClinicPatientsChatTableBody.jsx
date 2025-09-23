import axios from "axios";
import Swal from "sweetalert2";

const ClinicPatientsChatTableBody = ({ chats, loading, setSelectedChat, setSelectedPatient, fetchMessages }) => {

    const lastUserMessage = (chat) => {
        const userMessages = chat.filter((message) => message.role === "user");
        return userMessages[userMessages.length - 1];
    };

    return (
        <tbody>
            {loading ? (
                <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-600"></div>
                            <span>Loading patient chats...</span>
                        </div>
                    </td>
                </tr>
            ) : chats && chats.length === 0 ? (
                <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500">
                        No patient chats found for this clinic.
                    </td>
                </tr>
            ) : (
                chats?.map((item, index) => (
                    <tr
                        key={index}
                        className="hover:bg-slate-50 transition-colors border-t border-slate-200"
                    >
                        <td className="py-4 px-4 font-mono text-slate-700">
                            #0001
                        </td>
                        <td className="px-4 font-semibold text-slate-800">
                            {item.patientName}
                        </td>
                        <td
                            className="px-4 max-w-xs truncate"
                            title={lastUserMessage(item.chat)?.text}
                        >
                            {lastUserMessage(item.chat)?.text || "No messages yet"}
                        </td>
                        <td className="px-4">
                            {item.lastTimestamp
                                ? new Date(item.lastTimestamp).toLocaleDateString()
                                : "Never"}
                        </td>
                        <td className="px-4">
                            <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md text-sm w-fit">
                                Active
                            </span>
                        </td>
                        <td className="px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedPatient({
                                            id: item.patientId,
                                            name: item.patientName,
                                        });
                                        setSelectedChat(item.chat);
                                    }}
                                    className="px-3 py-1.5 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 border border-cyan-200 hover:border-cyan-300 rounded-md font-medium transition-all duration-200 text-sm"
                                >
                                    View
                                </button>
                                <button
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            const result = await Swal.fire({
                                                title: "Delete chats?",
                                                text: `This will delete all chats for ${item.patientName}.`,
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonText: "Delete",
                                                cancelButtonText: "Cancel",
                                                confirmButtonColor: "#dc2626",
                                            });
                                            if (result.isConfirmed) {
                                                await axios.delete(
                                                    `http://localhost:3000/chat/${item.patientId}`
                                                );
                                                await Swal.fire({
                                                    title: "Deleted",
                                                    text: "Patient chats were deleted.",
                                                    icon: "success",
                                                    timer: 1200,
                                                    showConfirmButton: false,
                                                });
                                                fetchMessages();
                                            }
                                        } catch (e) {
                                            await Swal.fire({
                                                title: "Error",
                                                text: "Failed to delete chats.",
                                                icon: "error",
                                            });
                                            // eslint-disable-next-line no-console
                                            console.error("Failed to delete chats", e);
                                        }
                                    }}
                                    className="px-3 py-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-md font-medium transition-all duration-200 text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    );
}

export default ClinicPatientsChatTableBody;
