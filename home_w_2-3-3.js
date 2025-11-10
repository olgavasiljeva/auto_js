let userBalance = 500;
let parcelCost = 100;
let codeBase = "A001DFX0";
let userInputCode = "A001DFX0"; 
let parcelId = "1432HGF";

let postOffice = [null, null, null, "1432HGF", null];

function giveParcel(userInputCode, codeBase, userBalance, parcelCost, postOffice) {
    if (userInputCode === codeBase && userBalance >= parcelCost) {
        userBalance -= parcelCost
    
        console.log(`Заберите посылку ${parcelId} из ячейки № ${postOffice.indexOf(parcelId)+1}. Ваш счет составляет ${userBalance} ед.`)
    } else {
        console.log("Посылку получить невозможно.")
    }
}

giveParcel(userInputCode, codeBase, userBalance, parcelCost, postOffice, parcelId)