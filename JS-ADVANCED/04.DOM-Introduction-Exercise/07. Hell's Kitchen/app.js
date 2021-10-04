function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const textArea = document.querySelector('#inputs textarea').value;
      const arr = JSON.parse(textArea);
      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const bestWorkersOutput = document.querySelector('#workers p');
      ////////////////////// CREATE OBJECT ///////////////////////
      let restaurants = {};
      let avg = 0;
      let topRestaurant = '';
      for (let currentRestaurant of arr) {
         const [restaurant, team] = currentRestaurant.split(' - ');
         const eachPerson = team.split(', ');
         if (restaurants[restaurant] == undefined) {
            restaurants[restaurant] = {};
         }
         for (let currentPerson of eachPerson) {
            let [person, salary] = currentPerson.split(' ');
            salary = Number(salary);
            restaurants[restaurant][person] = salary;
         }
      }
      /////////////////TOP RESTAURANT AND AVERAGE SALARY/////////////////////////
      for (let restaurant in restaurants) {
         let currentAvg = 0;
         let counter = 0
         for (let employee in (restaurants[restaurant])) {
            counter++
            currentAvg += restaurants[restaurant][employee]
         }
         currentAvg = currentAvg / counter
         if (currentAvg > avg) {
            avg = currentAvg;
            topRestaurant = restaurant;
         }
      }
      //////////////////////// SORT AND PRINT ////////////////
      let sortedAmigos = Object.entries(restaurants[topRestaurant]).sort((a, b) => b[1] - a[1]);
      console.log(sortedAmigos);
      const finalResult = `Name: ${topRestaurant} Average Salary: ${avg.toFixed(2)} Best Salary: ${sortedAmigos[0][1].toFixed(2)}`;
      const people = [];
      for (let [name, salary] of sortedAmigos) {
         people.push(`Name: ${name} With Salary: ${salary}`);
      }
      const peopleAndSalary = people.join(' ');
      bestRestaurantOutput.textContent = finalResult;
      bestWorkersOutput.textContent = peopleAndSalary;
   }
}