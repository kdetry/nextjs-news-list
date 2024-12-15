export const fetchAndJson = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  return { data: null, error: response.statusText };
};
