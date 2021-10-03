function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      const search = document.getElementById('searchField')
      const searchField = search.value.toLowerCase();
      const table = Array.from(document.querySelectorAll('tbody tr'));
      for (let row of table) {
         let text = row.textContent.toLowerCase();
         if (text.includes(searchField)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }

         search.value = '';
      }
   }

}