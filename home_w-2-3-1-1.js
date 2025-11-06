const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

let scores = [];

  for (let index in players) {
    scores.push(players[index].scorePoints);
  }

let maxScore = Math.max(...scores)

for (let index in players) {
    if(players[index].scorePoints === maxScore) {
        console.log(players[index])
        break
    }
  }