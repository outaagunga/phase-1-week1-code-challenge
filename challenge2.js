
//In this challenge, am going to consider the following:
//Take the input speed of the car
//Compare the speed to the speed limit of 70 km/s
//Calculate the demerit points based on the speed
//Print the appropriate message based on the demerit points



// I am importing the 'readline' module from Node.js
const readline = require('readline');

// Create a standard input and output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// using callback to Prompt the user to enter the car speed
rl.question('Enter the car speed: ', (speed) => {
  // Declaring speed limit, demerit points per speed, and maximum demerit points that can lead to License suspension
  const speedLimit = 70;
  const demeritPointsPerKm = 5;
  const maxDemeritPoints = 12;

  // Calculating demerit points based on the entered speed
  const calculateDemeritPoints = (speed) => {
    // Logging if the speed is below the speed limit
    if (speed < speedLimit) {
      console.log('Ok');
    } else {
      // Calculate the demerit points
      const points = Math.floor((speed - speedLimit) / demeritPointsPerKm);
      // Checking if the demerit points exceed the maximum allowed
      if (points >= maxDemeritPoints) {
        console.log(`Points: ${points}, License suspended`);
      } else {
        console.log(`Points: ${points}`);
      }
    }
  };

  
  calculateDemeritPoints(speed);

  // Closing the imported readline interface
  rl.close();
});


