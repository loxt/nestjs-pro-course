function log(target, key, descriptor) {
  console.log(target);
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    // Call the original method
    const result = original.apply(this, args);

    // Log the call, and the result
    console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`)

    // Return the result
    return result;
  }
  return descriptor;
}

class Calculator2 {
  // Using the decorator @log

  @log
  // @ts-ignore
  square(n: number) {
    return n * n;
  }
}

const calculator = new Calculator2();
// square with args [2] returned 4
calculator.square(2);

// square with args [3] returned 9
calculator.square(3);
