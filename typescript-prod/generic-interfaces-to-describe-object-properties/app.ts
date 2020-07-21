interface Pair<T, U> {
  first: T;
  second: U;
}

const p: Pair<string, number> = { first: '10K', second: 1000 };
console.log(p);

// const person: Pair<string, string> = { first: 'Emannuel', second: 'Loxt' };
// console.log(person);
