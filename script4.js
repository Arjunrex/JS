// Task 1: 

let arr = [10, 20, 30, 40, 50];

console.log("First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);
console.log("Length:", arr.length);


// Task 2: 

let arr = [1, 2, 3];

arr.push(4, 5);   // add
arr.pop();        // remove last
console.log(arr); // [1,2,3,4]


// Task 3: 

let arr = ["html","css","javascript","react"];

console.log(arr.includes("javascript")); // true


// Task 4: 

let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let result = emp.filter(e => e.salary > 20000);
console.log(result);


// Task 5: 

let names = emp.map(e => e.name);
console.log(names); // ["A","B","C"]


// Task 6: 

let total = emp.reduce((sum, e) => sum + e.salary, 0);
console.log(total); // 90000


// Task 7: 

let arr = [1,2,2,3,4,4,5];

let unique = [...new Set(arr)];
console.log(unique);


// Task 8: 
let arr = [10, 200, 5, 90];

let max = Math.max(...arr);
console.log(max); // 200


// Task 9: 

let str = "hello";

let reversed = "";
for(let i = str.length - 1; i >= 0; i--){
  reversed += str[i];
}

console.log(reversed); // olleh



// Task 10:

let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let group = emp.reduce((acc, e) => {
  if(!acc[e.salary]){
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(group);


// Task 11: 

let arr = [1,[2,[3,[4]]]];

function flatten(a){
  let result = [];
  
  for(let i of a){
    if(Array.isArray(i)){
      result = result.concat(flatten(i));
    } else {
      result.push(i);
    }
  }
  
  return result;
}

console.log(flatten(arr)); // [1,2,3,4]


// Task 12: 

let arr = [5,2,9,1];

arr.sort((a, b) => b - a);
console.log(arr); // [9,5,2,1]


// Task 13: 
let arr = [10, 50, 20, 40];

let sorted = [...new Set(arr)].sort((a,b) => b - a);
console.log(sorted[1]); // 40


// Task 14: 

let str = "aabbccdde";

let count = {};

for(let ch of str){
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);