//type 1
function addNum(a, b) {
  var c = a + b;
  console.log(c);
}

addNum(50, 800);

console.log("__-----__------__--------__");

//console.log(c);// this gives error because var is local
//type 2 ././././././././././././..........///////
const getAvg = function (m1, m2, m3) {
  const avg = (m1 + m2 + m3) / 3;

  // console.log(avg);
  return avg;
};

const result = getAvg(50, 40, 80);
console.log(result);

console.log("__-----__------__--------__");

//type 3....././././././/./././././././
const factorial = (n) => {
  let f = 1;
  for (let i = 2; i <= n; i++) {
    f = f * i;
  }
  return f;
};
const ans = factorial(5);
console.log(ans);
console.log("__-----__------__--------__");

// practise function ..........///

//create a function to check if a number is even or odd

const checkeven = (n) => {
  if (n % 2 === 0) {
    return "ever";
  } else {
    return "odd";
  }
};

const res = checkeven(7);
console.log(res);
console.log("__-----__------__--------__");

//create a funtion to take of the day greed according

const daygreed = (time) => {
  if (time =="morning") {
    return "good morning ";
  } else if (time == "noon ") {
    return "good afternoon";
  } else if (time == "evening ") {
    return "good evening";
  } else if (time =="night ") {
    return "good night";
  }
}
const res1 = daygreed("evening");
console.log(res1);

