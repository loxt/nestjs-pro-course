var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, key, descriptor) {
    console.log(target);
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Call the original method
        var result = original.apply(this, args);
        // Log the call, and the result
        console.log(key + " with args " + JSON.stringify(args) + " returned " + JSON.stringify(result));
        // Return the result
        return result;
    };
    return descriptor;
}
var Calculator2 = /** @class */ (function () {
    function Calculator2() {
    }
    // Using the decorator @log
    Calculator2.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], Calculator2.prototype, "square", null);
    return Calculator2;
}());
var calculator = new Calculator2();
calculator.square(2);
calculator.square(3);
