export default async function handler(req, res) {
  const url = "https://raw.githubusercontent.com/zipzipzip133/status/refs/heads/main/kontolmaklu.json";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch JSON");

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data", details: err.message });
  }
}
