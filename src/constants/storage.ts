export const getItem = (key: string) => {
  if (!key) return;

  return localStorage.getItem(key);
};
