const BASE_URL = "http://localhost:3001";

export async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
}
