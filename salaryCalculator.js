var nam = process.argv[2];
var age = parseInt(process.argv[3]);
var basicSalary = parseFloat(process.argv[4]);

const hra = (0.5*basicSalary);
const specialAllowance = 0.3*basicSalary;
const pf = 0.12*basicSalary;

let grossSalary = basicSalary + hra + specialAllowance - pf;
let annualGrossSalary = 12*grossSalary;

console.log("The annual gross salary of "+nam+" is "+annualGrossSalary);

//node salaryCalculator.js sampad 21 2000 to give the input