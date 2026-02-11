// function uniqueSet(set){
//     const seenId = new Set();
//     const mainSet = new Set();
//     set.forEach(element => {
//         if(!seenId.has(element.id)) {
//             mainSet.add(element);
//             seenId.add(element.id);
//         }
//     });
//     return Array.from(mainSet); // return [...mainSet]
// }



function uniqueSet(items){
    const uniqueIds = [...new Set(items.map(o => o.id))]
    return console.log(uniqueIds.map(id => items.find(o => o.id === id)));
}
uniqueSet([
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
  ]);
  

console.log(Number('0.1')+Number(0.2) === 0.3);
console.log(Number('0.15dsafghf'));

function randomBetween(min,max){
  // return min-1+Math.ceil(Math.random()*(max-min+1))
  return Math.floor(Math.random()*(max-min+1))+min;

}

console.log(randomBetween(3,5));

console.log(Math.ceil(Math.random()*2))

console.log(5000);
console.log(5_000);



function TradeMoney(sum, from, to){
  const current = {
    RUB:1,
    USD:80,
    EUR:90
  }
  if(!current[from] || !current[to]) return null
  const result = sum*current[from]/current[to]

  return Intl.NumberFormat('ru-RU', {
    style:'currency',
    currency: to
  }).format(result)
}

console.log(TradeMoney(1000, 'RUB', 'USD'))

console.log(5**2);

console.log(Math.sign(0));

// Ваш код здесь
const raw = process.argv[2] && process.argv[2].trim();
if(!raw || !/^[+-]?\d+$/.test(raw)) { 
  process.exit(1);
}
const s = (raw.startsWith('+') || raw.startsWith('-')) ? raw.slice(1):raw;
console.log(s.length)