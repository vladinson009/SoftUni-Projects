function solve() {
   document.querySelector('.shopping-cart').addEventListener('click', onClick);
   const outputValue = document.getElementsByTagName('textarea')[0];
   const allProducts = new Set();
   const totalPrice = [];

   function onClick(ev) {
      if (ev.target.className == 'add-product') {
         const parent = ev.target.parentElement.parentElement;
         const product = parent.querySelector('.product-title').textContent;
         const price = Number(parent.querySelector('.product-line-price').textContent);
         outputValue.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
         allProducts.add(product);
         totalPrice.push(price);
      } else if (ev.target.className == 'checkout') {
         const arrProducts = Array.from(allProducts.values())
         outputValue.textContent += `You bought ${arrProducts.join(', ')} for ${totalPrice
            .reduce((a, b) => a + b, 0).toFixed(2)}.`
         const buttons = document.getElementsByTagName('button');
         for (let button of buttons) {
            button.disabled = true;
            button.style.backgroundColor = 'gray';
         }
      }
   }
}