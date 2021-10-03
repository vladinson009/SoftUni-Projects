function solve() {
  const inputText = document.getElementById('text').value;
  const outputCase = document.getElementById('naming-convention').value.toLowerCase();
  const output = document.getElementById('result');
  const text = inputText.split(' ');
  let result = '';

  if (outputCase == 'camel case') {
    result += text[0].toLowerCase();
    for (let i = 1; i < text.length; i++) {
      result += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }

  } else if (outputCase == 'pascal case') {
    for (let i = 0; i < text.length; i++) {
      result += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }
  } else {
    result = 'Error!'
  }
  output.textContent = result;

}