// 1. Store a student's name, roll number, departmente, and marks in five subjects using appropriate variables and data types.

let studentName = "Prajwal" ;
let rollNumber = 18 ;
let department = "Computer Science" ;
let marks_JavaScript = 88 ;
let marks_Python = 85 ;
let marks_English = 90;
let marks_Hindi = 95 ;
let marks_Mathematics = 99 ;


// 2. Store five subjects marks in an array.

let marks = [88,85,90,95,99] ;

// 3. A function to calculateTotal(marks) to calculate the total marks.

function calculate_Total(marks){
    let Total = 0 ;
    for (let i = 0; i < marks.length; i++){
        Total += marks[i];
    }
    console.log("Total Marks =",Total)
}
calculate_Total(marks);


// 4. A function calculatePercentatage(marks) to calculate the percentage.

function calculate_Percentage(marks){
    let total = 0;
    for (let i = 0; i <marks.length; i++){
        total +=marks[i];
    }
    let percentage = (total/500)*100 ;
    console.log("Percentage =",percentage,"%");
}
calculate_Percentage(marks);

//  default assumpion of the total marks in each subject is 100.
 
// 5. Write a function findHighest(marks) to find the highest mark.

function find_Highest(marks){
     let sortedArray = marks.sort((a,b)=>a-b) ;
     console.log("Highest Marks =",sortedArray[sortedArray.length-1]);
 }
// let marks = [88,85,90,95,99] ;
  find_Highest(marks);
 
 
// 6. Write a function findLowest(marks) to find the lowest mark.
 
function find_Lowest(marks){
     let sortedArray = marks.sort((a,b)=>a-b);
     console.log("Lowest Marks =",sortedArray[0]);
 }
// let marks = [84,95,96,83,98] ;
find_Lowest(marks);
 
//  7. Count how many subjects have marks greater than or equal to 40.
 
//  let marks = [84,95,96,83,98] ;
 let count = 0;
 for(i=0;i<marks.length;i++){
     if(marks[i]>=70){
         count++
     }
 }
 console.log("Number of subjects which have marks greater than or equal to 70 =",count);
 
 // 8. Convert the student's name to uppercase and display the number of characters in the name.
 
 let student_Name = "Prajwal Kumar Rai" ;
 let uppercaseName = student_Name.toUpperCase()
 let characterCount = student_Name.length ;
 console.log("Name in uppercase:",uppercaseName);
 console.log("Number of characters:",characterCount);

// 9. Display the final report with the student's details, total, percentage, highest mark, lowest mark, and number of subjects passed.
function display_Report(marks) {
    let total = 0;
    let passed = 0;
    const passingMarks = 33;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= passingMarks) {
            passed++;
        }
    }

    const percentage = (total / 500) * 100;
    const highestMark = Math.max(...marks);
    const lowestMark = Math.min(...marks);

    console.log("Student Name =", studentName);
    console.log("Roll Number =", rollNumber);
    console.log("Department =", department);
    console.log("Total Marks =", total);
    console.log("Percentage =", percentage, "%");
    console.log("Highest Marks =", highestMark);
    console.log("Lowest Marks =", lowestMark);
    console.log("Number of subjects passed =", passed);
}
display_Report(marks);

// Bonus challenge: Create a function that accepts the marks array and returns "Excellent", "Good", "Average", or "Needs Improvement" based on the percentage.
 
 function Performance_Remark(marks){
    let total = 0 ;

     for (let i = 0; i < marks.length; i++) {
     total += marks[i];
    }
    let percentage = (total/500)*100 ;
    if(percentage >=90){
     console.log("Excellent");
    } else if(percentage>=70 && percentage<=80){
     console.log("Good");
    } else if(percentage>=50 && percentage<=60){
     console.log("Average");
    } else {
     console.log("Needs Improvement");
    }
}
Performance_Remark(marks);