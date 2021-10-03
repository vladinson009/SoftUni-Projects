function search() {

   const towns = Array.from(document.querySelectorAll('#towns li'));
   const search = document.getElementById('searchText').value.toLowerCase();
   const result = document.getElementById('result');
   let matches = 0;

   for (let town of towns) {
      if (town.textContent.toLowerCase().includes(search)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }
   result.textContent = `${matches} matches found`
}