//while , for , do while 
// for(let i =0; i<1000 ;i++){
//     console.log(i);
    
// }
// WAP to print all even numbers between 50 to 100

// for(let i =50; i<=100 ; i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
//WAp tp print all number divisible of 7 between 50 to 100

// for(let i = 30; i<=99;i++){
//     if(i%7===0){
//         console.log(i);
        
//     }
// }

// let b = 10;
// while (b<20){
//     console.log(b);
//     b++;


// }

// let c=10;
// do{
//     console.log(c);
    
// } while(c>20)

//WAP to check if it is a number is prime or not
const num1  =  11;
let prime =true;

for(i=2;i<num1;i++){
    if(num1%i===0){
        console.log("not a prime ");
        prime=false;
        break;
        
        
    }
}
if (prime) console.log("prime");


