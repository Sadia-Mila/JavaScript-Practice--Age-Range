

// Baby :0-3 years
// child :3-12 years
// Teenager: 13-19 years
// YoungAdult: 20-25 years
//  Adult   :25-39 Years
// Middle Aged Adult: 40-60 years
// SeniorCitizen: 60+ years


let age = 112

if (age > 0 && age <= 3) {
  console.log("You are Baby");
} else if (age > 3 && age <= 12) {
  console.log("You are Child");
} else if (age > 13 && age <= 19) {
  console.log("You are Teenager");
} else if (age > 19 && age <= 25) {
  console.log("You are Young Adult");
} else if (age > 25 && age <= 40) {
  console.log("You are Adult");
} else if (age > 40 && age <= 60) {
  console.log("You are Middle Aged Adult");
} else if (age > 60 && age < 110) {
  console.log("You are Senior Citizen");
} else {
  console.log("Invalid Data");
}