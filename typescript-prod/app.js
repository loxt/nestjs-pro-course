var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Customer;
}());
function customerLogger(customer) {
    console.log(customer.firstName + " " + customer.lastName);
}
var customer = new Customer('Emannuel', 'Loxt');
customerLogger(customer);
