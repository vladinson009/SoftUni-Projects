function solve() {
  const textArea = document.getElementById('input').value.split('.');
  const splitted = Array.from(textArea).slice(0, textArea.length - 1);
  const output = document.getElementById('output');

  let paragraph = '<p>';
  const result = [];
  let counter = 0;
  for (let i = 0; i < splitted.length; i++) {
    paragraph += splitted[i] + '.';
    counter++
    if (counter % 3 == 0) {
      result.push(paragraph + '</p>');
      paragraph = '<p>';
      counter = 0;
    }
  }
  if (paragraph != '<p>') {
    result.push(paragraph + '</p>')
  }
  output.innerHTML = result;
}