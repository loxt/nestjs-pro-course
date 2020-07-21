function log(target, key, descriptor) {
  console.log(`${key} was called`)
}

class Calculator {
  // Using the decorator @log

  @log
  square(n: number) {
    return n * n;
  }
}
