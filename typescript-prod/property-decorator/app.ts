function property(target: any, key: string) {
  let value = target[key];

  // Replacement getter
  const getter = function () {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  }

  // Replacement setter
  const setter = function (newVal) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  }

  // Replace the property
  const isDeleted = delete this[key];
  if (isDeleted) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

class Person {
  @property
  // @ts-ignore
  public firstName: string;
}

const person = new Person();
person.firstName = 'Emannuel';
console.log(person.firstName);
