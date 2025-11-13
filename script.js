// === GET ELEMENT ===
const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

// === MAIN FUNCTION ===
function isPalindrome(str) {
  const arr = str
    .toLowerCase()
    .replace(/[^0-9a-zA-Z]/g, "")
    .split("");
  if (JSON.stringify(arr) === JSON.stringify([...arr].reverse())) return true;
  else return false;
}

// === EVENT FUNCTION ===
checkBtn.addEventListener("click", () => {
  if (textInput.value === "") alert("Please input a value.");
  else {
    const answer = isPalindrome(textInput.value);
    result.innerHTML = `
      ${textInput.value} is 
      ${answer ? "" : "not"} 
      a palindrome
    `;
    textInput.value = "";
  }
});
