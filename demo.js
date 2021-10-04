let arr = JSON.parse(`["PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Bob 1300, Joe 780, Jane 660"
]
`)
for (let each of arr) {
    const [restaurant, team] = each.split(' - ');
    const eachPerson = team.split(', ');
    const [person, salary] = eachPerson.split(' ');
    console.log(restaurant, person, salary);

}
// console.log(arr);