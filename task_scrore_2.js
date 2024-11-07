// формула value1 + value2 / 5 + 17

const value1 = 10;
let value2 = Math.floor(Math.random() * 20) 

const result = value1 + value2 / 5 + 17; 
/* Приоритет операторов: 
1. Cначала идет деление value2 / 5 (у этого оператора более высокий приоритет).
2. Сложение результата с value1
3. Сложение результата с 17
*/


console.log(`Value1: ${value1}`);
console.log(`Value2: ${value2}`);
console.log(`Result: ${result}`);