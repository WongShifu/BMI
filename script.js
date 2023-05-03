// function calculateBMI(weight, height) {
//   return weight / height **2;
// }

// const firstName = "What is your first name?";
// const weight = "What is your weight?"
// const height = "What is your height?"
// const bmi = calculateBMI(weight, height)
// alert(firstName + `your BMI is + ${bmi} +!`);

function calculateBMI() {

  const firstName = prompt("What is your first name?")
  const height = prompt("What is your height in metres? (example 1.68)")
  const weight = prompt("What is your weight in kg? (62)")
  const bmi = (weight / height ** 2)
  console.log(firstName)
  console.log(weight)
  console.log(height)
  alert(firstName + ', your bmi is ' + bmi.toFixed(2) + '!')

}