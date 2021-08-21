function maidenParty(input) {
  let preis = Number(input[0])
  let loveTicket = Number(input[1])
  let rose = Number(input[2])
  let keys = Number(input[3])
  let karikaturs = Number(input[4])
  let surprice = Number(input[5])
  let total = 0;

  let totalPreis = loveTicket * 0.6 + rose * 7.2 + keys * 3.6 + karikaturs * 18.20 + surprice * 22
  let articuls = loveTicket + rose + keys + karikaturs + surprice
  if (articuls > 25) {
      total = totalPreis * 0.35
  }
  let finalPreis = totalPreis - total
  let hosting = finalPreis * 0.10
  let profit = finalPreis - hosting
  let moneyg = profit - preis
  let moneys = preis - profit


  if (profit > preis) {
      console.log(`Yes! ${moneyg.toFixed(2)} lv left.`)
  } else if (profit < preis) {
      console.log(`Not enough money! ${moneys.toFixed(2)} lv needed.`)
  }


}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])