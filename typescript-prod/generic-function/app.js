function LoggerAndReturn(thing) {
    return thing;
}
// const message: string = LoggerAndReturn<string>('Hello World');
var message = LoggerAndReturn('Hello World');
var message2 = LoggerAndReturn(2);
console.log(message, message2);
