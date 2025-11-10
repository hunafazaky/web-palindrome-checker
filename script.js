const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function palindrome(str) {
  const arr = str
    .toLowerCase()
    .replace(/[^0-9a-zA-Z]/g, "")
    .split("");
  if (JSON.stringify(arr) === JSON.stringify([...arr].reverse())) return true;
  else return false;
}

checkBtn.addEventListener("click", () => {
  console.log(textInput.value);
  if (textInput.value.length <= 0) {
    alert("Please input a value.");
  } else {
    const final = palindrome(textInput.value);
    result.innerHTML = `<h1>${textInput.value} is ${
      final ? "" : "not"
    } a palindrome</h1>`;
    textInput.value = "";
  }
});
