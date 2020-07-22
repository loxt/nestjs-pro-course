var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function property(target, key) {
    var value = target[key];
    // Replacement getter
    var getter = function () {
        console.log("Getter for " + key + " returned " + value);
        return value;
    };
    // Replacement setter
    var setter = function (newVal) {
        console.log("Set " + key + " to " + newVal);
        value = newVal;
    };
    // Replace the property
    var isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
var Person = /** @class */ (function () {
    function Person() {
    }
    __decorate([
        property
    ], Person.prototype, "firstName", void 0);
    return Person;
}());
var person = new Person();
person.firstName = 'Emannuel';
console.log(person.firstName);
