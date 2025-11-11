let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
    ];

let expectResult = [40590, 148200, 25709]

function calculateExpenses(expencesArray) {
    let sum = 0;
    for(monthExp of expencesArray) {
        if (monthExp > 1000){
            sum += monthExp;
        }
    }
    return sum;
}

console.log(calculateExpenses(expencesExamples[0].yearlyExpences))

function testExpenses(expectResult, expencesArray) {
    let actualResult = calculateExpenses(expencesArray)
    console.log(`Expected: ${expectResult}, Actual: ${actualResult}`);
    if(actualResult === expectResult) {
        console.log("Correct calculation")
    } else {
        console.log("Incorect calculation")
    }
}

expencesExamples.forEach((expenceEx, index) => {
    testExpenses(expectResult[index], expenceEx.yearlyExpences);
})