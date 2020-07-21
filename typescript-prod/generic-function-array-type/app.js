function getArray(items) {
    return new Array().concat(items);
}
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(['Hello', 'World']);
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
console.log(myNumArr, myStrArr);
// myNumArr.push('doesnt work with different type');
// myStrArr.push(5);
