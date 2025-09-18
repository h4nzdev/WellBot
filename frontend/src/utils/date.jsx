export const useTime = (date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const useDate = (date) => {
  return new Date(date).toLocaleDateString();
};
