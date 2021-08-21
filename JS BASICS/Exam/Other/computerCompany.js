function computerCompany(input) {
    let index = 0;
    let nModelComputers = Number(input[index++]);
    let totalSells = 0
    let totalRateing = 0
    for (let i = 1; i <= nModelComputers; i++) {
      let currentSells = 0
      let sellsAndRateing = Number(input[index++]);
      let sells = Math.trunc(sellsAndRateing / 10)
      let rateing = sellsAndRateing % 10
      if (rateing === 2) {
        currentSells = sells * 0;
        totalRateing+=2;
      } else if (rateing === 3) {
        totalRateing+=3
        currentSells = sells * 0.5;
      } else if (rateing === 4) {
        totalRateing+=4
        currentSells = sells * 0.7;
      } else if (rateing === 5) {
        totalRateing+=5
        currentSells = sells * 0.85;
      } else if (rateing === 6) {
        totalRateing+=6
        currentSells = sells
      }
      totalSells+= currentSells
    }
    console.log(totalSells.toFixed(2));
    console.log((totalRateing / nModelComputers).toFixed(2));
   
  }