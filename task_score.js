//расчет среднего балла за домашние задания студента по модулям

const introScore = 50;
const gitScore = 79;
const jsScore = 65;

let total = introScore + gitScore + jsScore; //вычисление общей суммы баллов по модулям
let averageScore = total / 4 //вычисление среднего значения баллов по модулям


const firstName = "Mike"
const lastName = "Smith"

console.log(`Student ${firstName.slice(0, 1)}. ${lastName} for the three modules will be ${averageScore}.`);