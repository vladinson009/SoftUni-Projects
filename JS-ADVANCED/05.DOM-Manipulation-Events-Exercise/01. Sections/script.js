function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', onClick);

   for (let string of words) {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = string;
      pEl.style.display = 'none';
      divEl.appendChild(pEl);
      content.appendChild(divEl);

   }

   function onClick(ev) {
      if (ev.target.tagName == 'DIV' && ev.target != content) {
         ev.target.children[0].style.display = 'block';
      }
   }
}