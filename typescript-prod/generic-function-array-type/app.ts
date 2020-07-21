function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(['Hello', 'World']);

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello', 'World']);

console.log(myNumArr, myStrArr);

// myNumArr.push('doesnt work with different type');
// myStrArr.push(5);
