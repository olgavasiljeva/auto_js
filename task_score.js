//расчет среднего балла за домашние задания студента по модулям

const introScore = 50;
const gitScore = 79;
const jsScore = 65;

let averageScore = (introScore + gitScore + jsScore) / 3; //вычисление общей суммы баллов по модулям и вычисление среднего балла

const firstName = "Mike"
const lastName = "Smith"

console.log(`Student ${firstName.slice(0, 1)}. ${lastName} for the three modules will be ${averageScore}.`);