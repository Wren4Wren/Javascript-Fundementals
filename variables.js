// console.log("All Around The World".charAt(7).toUpperCase())

// let i = 10;
// i = i + 2;
// console.log(i);

// let name = "Wren";
// let age = 25;
// let faveDrink = "Coffee";
// console.log(`Heyho, my name is ${name}. I am ${age} years old, and my favourite drink is ${faveDrink}.`);

// age = 26;
// faveDrink = "Bubble Tea";
// console.log(`Heyho, my name is ${name}. I am ${age} years old, and my favourite drink is ${faveDrink}.`);

// let day = "Tuesday";
// let breakfast = "Apple";
// let lunch = "Pizza";
// let dinner = "Vegan Ricebowl";
// console.log(`Today is ${day}. For breakfast, I will have ${breakfast}. For lunch, I'll eat ${lunch}; and for dinner, I'll devour ${dinner}.`);

// day = "Wednesday";
// breakfast = "Coffee";
// lunch = "Lemon Water";
// dinner = "Green Tea";
// console.log(`Today is ${day}. For breakfast, I will have ${breakfast}. For lunch, I'll eat ${lunch}; and for dinner, I'll slurrrp ${dinner}.`);

todayDate = new Date("10/05/2022");
birthDate = new Date("01/01/1997");

timeDifference = todayDate.getTime() - birthDate.getTime();
daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));

console.log(
  `The difference between ${todayDate} and ${birthDate} is ${daysDifference} days.`
);
