
// 📌 Task 1: Print All Students
for(let i=0; i<students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    );
}


// 📌 Task 2: Pass / Fail
for(let i=0; i<students.length; i++){
    if(students[i].mark >= 50){
        console.log(students[i].name + " - Pass");
    } else {
        console.log(students[i].name + " - Fail");
    }
}


// 📌 Task 3: Grade System
for(let i=0; i<students.length; i++){
    let m = students[i].mark;

    if(m >= 90){
        console.log(students[i].name + " - A Grade");
    } else if(m >= 75){
        console.log(students[i].name + " - B Grade");
    } else if(m >= 50){
        console.log(students[i].name + " - C Grade");
    } else {
        console.log(students[i].name + " - Fail");
    }
}


// 📌 Task 4: Topper Student
let top = students[0];

for(let i=1; i<students.length; i++){
    if(students[i].mark > top.mark){
        top = students[i];
    }
}

console.log("Topper is " + top.name + " - " + top.mark);


// 📌 Task 5: Course Search (React)
for(let i=0; i<students.length; i++){
    if(students[i].course === "React"){
        console.log(students[i]);
    }
}


// 📌 Task 6: Add New Student
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

for(let i=0; i<students.length; i++){
    console.log(students[i]);
}


// 📌 Task 7: Attendance System
let status = "present";

switch(status){
    case "present":
        console.log("Welcome");
        break;

    case "absent":
        console.log("Mark Absent");
        break;

    case "leave":
        console.log("Approved Leave");
        break;

    default:
        console.log("Invalid");
}


// 📌 Task 8: Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
} else {
    console.log("Invalid User");
}