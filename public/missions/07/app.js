// Koppla in encore-API:t och hantera fel. / Connect the encore API and handle errors.
document.querySelector("#load").addEventListener("click", async () => {
  try {
   const response = await fetch('/api/encore');
    if (!response.ok) throw new Error('Failed to fetch encore track');
    const track = await response.json();
    document.querySelector("#encore").textContent = track.title;
  } catch (error) {
    document.querySelector("#status").textContent = error.message;
  }
});
