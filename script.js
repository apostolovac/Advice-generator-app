const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceDice = document.querySelector(".advice-dice");

async function getAdvice() {
 const apiUrl = "https://api.adviceslip.com/advice";

 try {
  const response = await fetch(apiUrl);

  if (!response.ok) {
   throw new Error("Failed to fetch advice");
  }

  const data = await response.json();
  newAdvice(data);
 } catch (error) {
  adviceText.textContent = "Failed to fetch advice. Please try again later.";
 }
}

function newAdvice(data) {
 const { slip } = data;

 adviceId.textContent = slip.id ? `ADVICE #${slip.id}` : "Unknown";
 adviceText.textContent = slip.advice;
}

adviceDice.addEventListener("click", getAdvice);
