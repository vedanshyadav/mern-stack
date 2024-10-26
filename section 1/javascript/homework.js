const num= 10;

let n1=0 , n2=1 , nextterm;

console.log("fibonacci series");


for( let i= 1; i<=num ; i++){
    console.log(n1);
    nextterm = n1+n2;

    n1 = n2;
    n2 = nextterm;

    
}

 console.log("--------------------------");

let num1= 102;
let reverse = 0 ;

while(num1>0){

     console.log(num1 , reverse);
    
    let d = num1%10;
    reverse = reverse *10+d;

    num1= parseInt(num1/10);
    
}

console.log(reverse);
