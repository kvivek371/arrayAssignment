console.log("------Working-------------")

let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
] 

console.log("------Question 1-------------")

let nameUpper = studentRecords.map(key => key.name.toUpperCase());
console.log(nameUpper);

console.log("------Question 2-------------")

let marks = studentRecords.filter(key => key.marks>50);
console.log(marks);

console.log("------Question 3-------------")

let marksId = studentRecords.filter(key => key.id>120 && key.marks>50);
console.log(marksId);

console.log("------Question 4-------------")

let totalMarks = studentRecords.reduce((acc, cur) => acc = acc + cur.marks,0);
console.log(totalMarks);

console.log("------Question 5-------------")

let marksAbove = studentRecords.filter(key => key.marks>50);
for(let i = 0; i<marks.length; i++){
    console.log(marksAbove[i].name);
}

console.log("------Question 6-------------")
let marksAboveId = studentRecords.filter(key => key.id>120);
let totalMarksId = marksAboveId.reduce((acc, cur) => acc = acc + cur.marks,0);
console.log(totalMarksId);

console.log("------Question 7-------------")

// let totalMarksObt = studentRecords.filter(key => key.marks);
// console.log(totalMarksObt);
// let marksBelow = studentRecords.filter(key => key.marks<50);
// console.log(marksBelow);
// let nameMarksBelow = marksBelow.map(key => key.marks);
// let graceMarks = nameMarksBelow.map((marks) => marks +15);
// console.log(graceMarks);
// for(let i = 0; i<totalMarksObt.length; i++){
//     if(totalMarksObt>50){
//         console.log(totalMarksObt[i].marks);
//     }
// }

for(let key of studentRecords){
    if(key.marks<50){
        
        key.marks = key.marks + 15;
    }
}
console.log(studentRecords);

let newMarks = studentRecords.filter(x => x.marks>50);
console.log(newMarks);
let totalNewMarks = newMarks.reduce((acc, cur) => acc = acc + cur.marks,0);
console.log(totalNewMarks);

console.log("------Question 8-------------")

let obj1 ={
    name : "aman",
    class : 1,
    rollNo : 15
}
let obj2 ={
    name : "adarsh",
    class : 1,
    rollNo : 55
}
let obj3 ={
    name : "kirat",
    class : 1,
    rollNo : 41
}
let obj4 ={
    name : "anna",
    class : 1,
    rollNo : 12
}
let obj5 ={
    name : "akash",
    class : 1,
    rollNo : 2
}
let obj6 ={
    name : "akshar",
    class : 1,
    rollNo : 30
}

let arrObject =[{...obj1},{...obj2},{...obj3},{...obj4},{...obj5},{...obj6}];
console.log(arrObject);