function LoggerAndReturn<T>(thing: T): T {
  return thing;
}

// const message: string = LoggerAndReturn<string>('Hello World');
const message: string = LoggerAndReturn('Hello World');
const message2: number = LoggerAndReturn(2);
console.log(message, message2);
