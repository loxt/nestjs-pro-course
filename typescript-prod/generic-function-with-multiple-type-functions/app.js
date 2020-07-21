function getInfo(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
getInfo(1, 'Jane'); //number, string
// generic with non generic type
function displayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
displayType(2, 'Malik'); // number, string
