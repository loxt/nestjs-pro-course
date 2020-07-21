interface Command<T, R> {
  id: T;
  run(): R;
}

let c: Command<string, number> = {
  id: Math.random().toString(36),
  run: function () {
    return 3;
  }
}

console.log(c.id);
console.log(c.run());
