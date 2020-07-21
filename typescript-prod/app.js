function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
console.log(myNumArr, myStrArr);
