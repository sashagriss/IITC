// // 1.
 for (let i = 10; i >0 ; i--) {
    console.log(i)
}
// 2.
 for (let i = 0; i <= 20; i++) {
    if (i % 2 ===0 )
    console.log(i);
}
// // 3.
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += 1;
    // sum = sum + i
}
log.console(sum);



4.
 for (let i = 5; i <50; i+=5) {
    console.log(i);
}

// 5.
for (let i = 0; i <=5; i++) {
   console.log("*".repeat(i));;
}

         // The while loop

let guessNumber = 7;
let userGuess;
let totalGuess = 0

while (guessNumber !== guess && totalGuess < 3 ){
userGuess = Number(prompt("guess thr number (1-10"))
totalGuess++
console.log(totalGuess);
}


// // 2.
let i = 1
while (i <= 100) {
console.log(i);
i = i*2
}

              The do while 
1. 

let i = 1
do { 
    console.log(i++);
}
while(i <=5);

// 2.
let 
// confirm ("do you want to play again");


// Loop Array 

// 1.
 let food = ["pinapple","chocolate", "cheese" ,"kiwi", "cream" ];
// //  2.
console.log(food[2]);
// 3.
food [1]= "milk";
console.log(food[1]);
// 4.
food.push("apple")
console.log(food);
// 5.
food.shift();
console.log(food);
// // 6.
for (let i = 0; i < food.length; i++) {
   console.log(food[i]);
};
7.
console.log(food.indexOf("kiwi"));
// 8.
let num = [1,2,3,4,5]
sum=0 ;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum);


