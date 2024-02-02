export async function getAllStarships() {
  const apiUrl = "https://swapi.dev/api/starships/";
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Bad Output:", error);
    throw error;
  }
}
