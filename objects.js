// let offer = "none";
// let time = 1200;

// const cafe = {
//   name: "Kofe",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: ["Cappuccino", "Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
//   breakfastOffer: "Free croissant with coffee",
//   lunchOffer: "Free drink with surprisingly priced sandwich",
//   noOffer: "Sorry, no offer.",

//   openCafe() {
//     if (this.hasSpecialOffers) {
//       return "Come on in!";
//     }
//   },
//   closeCafe() {
//     return "Sorry, we're closed. Come back tomorrow!";
//   },
// };

// console.log(cafe.openCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person = {
//     name: "Wren",
//     age: "25",
//     faveSongs: [
//         "ITZY - Not Shy",
//         "KDA - More",
//         "EXO - Lotto",
//     ]
// }
// console.log(person.name, person.age, person.faveSongs)
// console.log(person["name"])

// let day = "Monday"
// const alarm = {
//     weekDayAlarm: "Get up at 7am",
//     weekendAlarm: "No alarm needed"
// }
// if (day === "Saturday" || day === "Sunday") {
//     console.log(alarm.weekendAlarm)
// } else {
//     console.log(alarm.weekDayAlarm)
// }

// // Activity 1

// const person = {
//   name: "Wren",
//   age: "25",
//   faveSongs: ["ITZY - Not Shy", "KDA - More", "EXO - Lotto"],
//   sayHi() {
//     return `Heyho, I'm ${this.name}`;
//   },
// };
// console.log(person.sayHi())

// // Activity 2
// const pet = {
//   name: "Mooncake",
//   time: 1705,
//   typeOfPet: "Dumbo Rat",
//   age: 1,
//   color: "Brown",
//   eat() {
//     if (this.time <= 1700) {
//       return `${this.name} is eating.`;
//     } else if (this.time < 1600 && this.time >= 1500) {
//       return `${this.name} is sleeping.`;
//     }
//   },
//   drink() {
//     if (this.time >= 1705) {
//       return `${this.name} is drinking.`;
//     } else if (this.time > 1930) {
//       return `${this.name} is grooming.`;
//       }
//     else {
//         return `${this.name} is sleeping.`;
//       }
//   },
// };
// console.log(pet.drink());

// Activity 3

let order = [];
const coffeeShop = {
  branch: "manchester",
  drinksWithPrices: {
    tea: 1.5,
    americano: 2.7,
    mocha: 2.5,
    latte: 2.0,
    cappucino: 1.8,
    water: 500,
  },
  foodWithPrices: {
    packetOfCrisp: 2.0,
    sandwich: 3.0,
    prawnCocktail: 2.5,
    fruit: 1.0,
  },
  drinksOrdered(drink1, drink6) {
    let drinks = Object.keys(this.drinksWithPrices);
    let drinkValues = Object.values(this.drinksWithPrices);
    order.push(drinkValues[drinks.indexOf(drink1)]);
    order.push(drinkValues[drinks.indexOf(drink6)]);
    return `For drinks you've ordered ${drink1} and ${drink6}`;
  },
  foodOrdered(food1, food2) {
    let foods = Object.keys(this.foodWithPrices);
    let foodValues = Object.values(this.foodWithPrices);
    order.push(foodValues[foods.indexOf(food1)]);
    order.push(foodValues[foods.indexOf(food2)]);
    return `For food you've ordered ${food1} and ${food2}`;
  },
};
console.log(coffeeShop.drinksOrdered("tea", "water"));
console.log(coffeeShop.foodOrdered("Packet of crisp", "fruit"));
let total = 0;
for (i = 0; i < order.length; i++) {
  total += order[i];
}

console.log(`Your total comes to £${total}.`);
