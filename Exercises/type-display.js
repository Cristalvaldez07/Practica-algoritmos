/* Make a program in which an integer is entered and display the sum of the
 numbers between 0 and the entered number on the screen.*/


// Leer numero 
let num = 9;
let sum = 0;

// not !
while( !(num == 0)   ){
    sum += num;
    --num;
}

console.log(sum);


// Method of Gauss
num = 9;
let sum_gauss = num * (num + 1)/2
console.log(sum_gauss);