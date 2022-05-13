// let weather = "Sunny";
// if (weather == "Sunny") {
//     console.log("Well I better wear some suncream!");
// } else if (weather == "Raining")    {
//     console.log("Better take an umbrella...");
// } else {
//     console.log("Hmm,it could go either way.");
// }

// if (1 === "1")  {
//     console.log(true);
// }
// else {
//     console.log(false);
// }
// if (1 != "1")   {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "Manchester";
// let weather1 = "Cloudy";

// if (place == "Manchester" && weather1 == "Sunny")   {
//     console.log("HA! Not in Manchester...");
// }
// else if (place == "Manchester" && weather1 == "Rain")   {
//     console.log("Rainchester");
// }
// else {
//     console.log("What?! It isn't raining?!! *gasp*");
// }

// let day = "Tuesday"

// switch(day){
//     case "Monday":
//     case "Moan-day":
//         console.log("Yup, first day of the week.");
//         break;
//     case "Tuesday":
//     case "Two-days":
//         console.log("Two days in!");
//         break;
//     case "Wednesday":
//         console.log("")
//         break;
//     case "Thursday":
//         console.log("")
//         break;
//     case "Friday":
//         console.log("")
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("")
//         break;
// }

// let age = 18;
// let country = "UK";

// if (age == 18 && country == "UK"){
//     console.log("so, What's your poison?");
// } else {
//     console.log("LOL! You aren't old enough");
// }

// ptop = "Spicy Pepperoni"
// switch(ptop){
//     case "Pineapple":
//     case "Olives":
//         console.log("You scrub!")
//         break;
//     case "Jalepenos":
//     case "Spicy Pepperoni":
//         console.log("I'll order for you now!")
//     default:
//         console.log("Shut up")
// }

// password = "rainbowss"
// lengthOf = password.numrevOf
// if (lengthOf <= 7){
//     console.log("Password too short")
// } else{
//     console.log(`${password}`)
// }

// num = 27
// if (num /3 || num /5){
//     console.log(`${num} is divisible by 3 or 5`)
// }
// else{
//     console.log(`${num} is a foreign number`)
// }

// if (num /3){
//     console.log("Fizz")
// } else if (num /3 || num /5){
//     console.log("FizzBuzz")
// } else if (num /5){
//     console.log("Buzz")
// } else{
//     console.log(num)
// }

user_time = 5;
workLocation = "Bedroom";
homeLocation = "My living room";

if (user_time > 6 && user_time < 17) {
  console.log(`I am at work in ${workLocation}.`);
} else if (user_time == 6 || user_time == 17) {
  console.log("I am commuting.");
} else {
  console.log(`I am at home in ${homeLocation}.`);
}
