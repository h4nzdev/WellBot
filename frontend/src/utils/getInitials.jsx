export const getInitials = (name) => {
  if (!name) return "";

  // Split by spaces and clean up
  const words = name.trim().split(/\s+/);

  // Take only the first and last word
  const first = words[0]?.[0] || "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";

  // Return ONLY 2 letters max
  return (first + last).toUpperCase();
};
