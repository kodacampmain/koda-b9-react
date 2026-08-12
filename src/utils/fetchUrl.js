/**
 * Wrapper for Fetching URL
 * @param {string} url URL to be fetched
 * @param {RequestInit} [options] fetch options
 * @returns {Promise<any>}
 */
async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(response.status);
  return await response.json();
}

export default fetchData;
