const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const types = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison Ground', 'Flying Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']

const calcTable = [
  [1, 1, 1,	1, 1,	1, 1,	1, 1,	1, 1,	1, 0.5,	0, 1,	1, 0.5,	1],
  [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
  [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5,	1, 1,	1],
  [1, 1, 2,	0.5, 0.5, 1, 1,	1, 0,	2,	1,	1,	1,	1,	0.5,	1,	1,	1],
  [1, 0.5,	2,	1,	0.5,	1,	1,	0.5,	2,	0.5,	1,	0.5,	2,	1,	0.5,	1,	0.5,	1],
  [1,	0.5,	0.5,	1,	2,	0.5,	1,	1,	2,	2,	1,	1,	1,	1,	2,	1,	0.5,	1],
  [2,	1,	1,	1,	1,	2,	1,	0.5,	1,	0.5,	0.5,	0.5,	2,	0,	1,	2,	2,	0.5],
  [1,	1,	1,	1,	2,	1,	1,	0.5,	0.5,	1,	1,	1,	0.5,	0.5,	1,	1,	0,	2],
  [1,	2,	1, 2,	0.5,	1,	1,	2,	1,	0,	1,	0.5,	2,	1,	1,	1,	2,	1],
  [1,	1,	1,	0.5,	2,	1,	2,	1,	1,	1,	1,	2,	0.5,	1,	1,	1,	0.5,	1],
  [1,	1,	1,	1,	1,	1,	2,	2,	1,	1,	0.5,	1,	1,	1,	1,	0,	0.5,	1],
  [1,	0.5,	1,	1,	2,	1,	0.5,	0.5,	1,	0.5,	2,	1,	1,	0.5,	1,	2,	0.5,	0.5],
  [1,	2,	1,	1,	1,	2,	0.5,	1,	0.5,	2,	1,	2,	1,	1,	1,	1,	0.5,	1],
  [0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	2,	1,	1,	2,	1,	0.5,	1,	1],
  [1,	1,	1, 1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	2,	1,	0.5,	0],
  [1,	1,	1,	1,	1,	1,	0.5,	1,	1,	1,	2,	1,	1,	2,	1,	0.5,	1,	0.5],
  [1,	0.5,	0.5,	0.5,	1,	2,	1,	1,	1,	1,	1,	1,	2,	1,	1,	1,	0.5,	2],
  [1,	0.5,	1,	1,	1,	1,	2,	0.5,	1,	1,	1,	1,	1,	1,	2,	2,	0.5,	1],
]

const typeNumber = (type) => {
  let i = 0;
  while(i < types.length){
    if(type == types[i]){
      return i;
    }
    else{
      i++
    }
  }
}

console.log()

rl.question('Enter Attack Type: ', (attackType) => {
  rl.question('Enter Defend Type: ', (defendType) => {
    let attack = typeNumber(attackType);
    let defend = typeNumber(defendType);
    console.log(calcTable[attack][defend] + 'x Damage')
    rl.close();
  });
});
