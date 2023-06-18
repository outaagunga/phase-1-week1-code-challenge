// 1. In this project, I am going to follow this steps:
// 2. Prompt the user to input student grades.
// 3. Validate the input to ensure that the marks entered by the user falls within the range of 0 to 100.
// 4. Determine the correct grade based on the marks entered by the user.
// 5. Output the grade to the user.


// Am importing the readline module from Node.js to create an interface for reading user input.
const readline = require('readline');

// Creating an interface using the standard input and output streams.
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// use a callback function to prompts users to enter student marks
rl.question('Enter student marks: ', (input) => {
const marks = parseInt(input);

// Declaring a function to calculate the grade based on the marks.
function calculateGrade(marks) {
// Checking if the marks are within the range of 0-100.
if (marks >= 0 && marks <= 100) {
let grade;
// Determining the grade based on the marks using conditional statements.
if (marks > 79) {
grade = 'A';
} else if (marks >= 60) {
grade = 'B';
} else if (marks >= 49) {
grade = 'C';
} else if (marks >= 40) {
grade = 'D';
} else {
grade = 'E';
}
return grade;
} else {
return 'Please enter the correct student score';
}
}

// assigning calculateGrade function to assign student grades with the provided marks.
const studentGrade = calculateGrade(marks);

// Logging the calculated grade to the console.
console.log('Grade:', studentGrade);

// Closes the readline interface.
rl.close();
});