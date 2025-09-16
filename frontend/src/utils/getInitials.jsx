export const getInitials = (name) => {
  if (!name) return ""; // handle empty name
  const words = name.trim().split(" "); // split by space and remove extra spaces
  const first = words[0][0]; // first letter of first word
  const last = words.length > 1 ? words[words.length - 1][0] : ""; // first letter of last word
  return (first + last).toUpperCase(); // combine and make uppercase
};
