// let chars = 'aabcdeeefghiijklmnoopqrstuuvwxyz ,.!??      '
// let charsArray = chars.split('');
// charsArray.push('<strong>', '</strong>', '<em>', '</em>', '<sub>', '</sub>', '<sup>', '</sup>', ' no ', ' yes ', ' no ', ' yes ');

// let randomString = ''
// setInterval(function() {
//     randomString = '';
//     let q = 0;
//     while(q < 1000) {
//         randomString+=charsArray[Math.floor((charsArray.length)*Math.random())]; 
//         q++;
//     }
//     document.getElementById("hey").innerHTML = randomString;
// }, 2000);

// Example: print out a single line of numbers counting backwards from 15 to 1, with a space between each number:
console.log("(Example) Use a for-loop to print out a single line of numbers counting backwards from 20 to 0, with a space between each number:\n\n");

// initialize a string (call it whatever you want, but make it empty!)
let backwardsNums = '';

// your for-loop should begin at 15 and count down, so:
// 1. create a variable 'i' and set it to 15;
// 2. check to see if 'i' is greater than 0. If it is, then go through the loop!
// 3. once the stuff inside the loop happens, decrease the value of 'i' by one.
// note: i-- is the same as i = i-1;
for(let i = 15; i > 0; i--)
{
    // Each time the loop runs, the string backwardsNums grows to include a new number.
    backwardsNums = backwardsNums + i + ' ';
    // you could also write it like this:
    // backwardsNums += i + ' ';

    // uncomment the line below to see what your backwardsNums string looks like at each step of the loop!
    // console.log(backwardsNums);
}

//print out the string to the console:
console.log(backwardsNums);
console.log('\n\n');

// here's the same exact code without all the comments
// let backwardsNums = '';
// for(let i = 15; i > 0; i--)
// {
//     backwardsNums = backwardsNums + i + ' ';
// }
// console.log(backwardsNums);




// 1. Use a for-loop to print out your name 6 times with a number on the end
console.log("1) Use a for-loop to print out your name 6 times with a number on the end:\n\n")
for(let i = 0; i < 6; i++) {
    console.log('doog'+ i +'!');
}
console.log('\n\n')

// 2. Use a while-loop to print out a string of incrementing numbers
console.log("2) Use a while-loop to print out a string of incrementing numbers:\n\n")

let numStr = '';
let numCount = 0;
while(numCount < 10) {
    numStr+=numCount;
    
    console.log(numStr);
    numCount++
}
console.log('\n\n');

// 3. Use a for-loop and some conditional statements (if/else) to print out this pattern: +-+
console.log("3) Use a for-loop and some conditional statements (if/else) to print out this pattern:\n\n")

let plusMinus = '';
for(let i = 0; i < 21; i++) {
    if(i % 2 == 0) {
        plusMinus+='+';
    } else {
        plusMinus+='-';
    }
}
console.log(plusMinus);
console.log('\n\n');

// 4 (bonus). Use a nested for-loop to print out rows of increasing stars:
console.log('4)(bonus) Use a nested for-loop to print out rows of increasing stars:\n\n')

let stars = '*';
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
    stars = '*';
}