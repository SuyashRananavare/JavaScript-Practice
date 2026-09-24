// 1. Print Numbers from 1 to 100 using a for loop.

for (a = 0; a <= 10; a++) {
    console.log(a);
}

// 2. Print Numbers from 10 to 1 using while loop.

let b = 10;
while (b > 0) {
    console.log(b);
    b--;
}

// 3. Print Even Numbers from 1 to 20 using a for loop.

for (c = 1; c <= 20; c++) {
    if (c % 2 == 0) {
        console.log(c);
    }
}

// 4. Print Odd Numbers from 1 to 15 using a while loop.

let d = 1;
while (d <= 15) {
    if (d % 2 !== 0) {
        console.log(d);
    }
    d++;
}

// 5. Print the multiplication table of 5.

// for (e = 5; e <= 50; e = e + 5) {
//     console.log(e);
// }

for(e=1;e<=10;e++){
  console.log(`5*${e}=${5 * e}`);
}

// 6. Find the sum of 1 to 100 using a loop.

let sum = 0;
for (f = 0; f <= 100; f++) {
    sum = sum + f;
}
console.log(sum);

// 7. Print All Numbers between 1 to 50 that are divisible by 3.

for (g=1;g<=50;g++){
    if(g%3==0){
        console.log(g);
    }
}

//8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// (e.g...."1 is odd","2 is even")

let value = prompt("Enter a number");

for(i=1; i<=value;i++) {
    if(i%2==0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
