function removeVowels() {
  const input = document.getElementById('textInput').value;

  if (input.trim() === "") {
    document.getElementById('result').textContent = "Enter a valid text";
  } else {
    const resultText = input.replace(/[aeiouAEIOU]/g, '');
    document.getElementById('result').textContent = `Result: ${resultText}`;
  }
}

document.getElementById('removeButton').addEventListener('click', removeVowels);
document.getElementById('textInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    removeVowels();
  }
});
