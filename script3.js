// Taks 1

function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");


 // Task 2
 
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(10, 5);

// Task 3

function greet(name) {
    console.log("Hello", name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");

// Task 4

function square(num) {
    return num * num;
}

console.log(square(5)); // 25

// Task 5

function testScope() {
    let secret = "javascript";
    console.log(secret); // works
}

testScope();

// Task 6

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let allItems = [...boys, ...girls];
console.log(allItems);

// Task 7

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    console.log(total);
}

sumAll(10, 20, 30, 40); // 100

// Task 8

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1, c2, c3);

// Task 9

let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role);

// Task 10

function* offers() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); 

// Task 11

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));

// Task 12

function marks(...nums) {
    let total = nums.reduce((sum, n) => sum + n, 0);
    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

marks(80, 90, 70, 60);


// Challenge Task

function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");

