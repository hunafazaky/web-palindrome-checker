import { isPalindrome } from "./palindrome.js";

const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function handleCheck() {
  const value = textInput.value.trim();

  if (value === "") {
    alert("Please input a value.");
    return;
  }

  const answer = isPalindrome(value);
  result.textContent = `"${value}" is ${answer ? "" : "not "}a palindrome.`;
  textInput.value = "";
}

checkBtn.addEventListener("click", handleCheck);

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleCheck();
});
