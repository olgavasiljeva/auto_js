const players = [
  { name: "Alice", scorePoints: 0 },
  { name: "Bob", scorePoints: 50 },
  { name: "Charlie", scorePoints: 100 },
  { name: "Diana", scorePoints: 100 },
  { name: "Eve", scorePoints: -10 },
  { name: "Frank", scorePoints: 99999 },
  { name: "Grace", scorePoints: 999998 },
];

let scores = [];

for (let index in players) {
  scores.push(players[index].scorePoints);
}

let maxScore = Math.max(...scores);

for (let index in players) {
  if (players[index].scorePoints === maxScore) {
    console.log(players[index]);
    break;
  }
}