function getInfo<T, U>(id: T, name: U): void {
  console.log(typeof id + ', ' + typeof name)
}

getInfo<number, string>(1, 'Jane'); //number, string

// generic with non generic type
function displayType<T>(id: T, name: string): void {
  console.log(typeof id + ', ' + typeof name)
}

displayType<number>(2, 'Malik') // number, string
