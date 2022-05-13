// console.log("Hello World".toUpperCase())
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10));
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log(lines[0], "\n", lines[1]);

// let row = [
//     "   |   |   ",
//     "   |   |   ",
//     "   |   |  "]


//     for (let i = 0; i < row.length; i++){
//     console.log(row[i]);
//         if(i < row.length -1){
//             console.log('------------')
//         }
// }
    
let ranNum = [];
while(ranNum.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
    if(ranNum.indexOf(r) === -1) ranNum.push(r);
}
console.log(ranNum);