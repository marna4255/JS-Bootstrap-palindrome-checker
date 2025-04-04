const paragraphElement = document.getElementById("result");
const buttonElement = document.getElementById("check-btn");
const inputElement = document.getElementById("text-input");

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, ""); // Remove non-alphanumeric characters for checking
  const reversedStr = cleanedStr.split("").reverse().join(""); // Reverse the string
  return cleanedStr === reversedStr;
}

buttonElement.addEventListener("click", function () {
  const inputValue = inputElement.value.trim();

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  paragraphElement.classList.remove("d-none");
  paragraphElement.classList.remove("alert-success", "alert-danger");

  if (isPalindrome(inputValue)) {
    paragraphElement.textContent = `${inputValue} is a palindrome.`;
    paragraphElement.classList.add("alert-success");
  } else {
    paragraphElement.textContent = `${inputValue} is not a palindrome.`;
    paragraphElement.classList.add("alert-danger");
  }
});
