function applyDiscount(cartAmount,Discount) {
    var cartAmount = 1000;
    var Discount = 200;
    cartAmount -= Discount;
    console.log(cartAmount);
}
applyDiscount(100,200);

function addTwoNumbers(a,b,c) {
    var d = (a/b)*c;
    return d;
}
var d = addTwoNumbers(1000,250,5);
console.log(d);

var assignName = function () {
    return "Denny Samson"
};
console.log(assignName());
var discount = function (cartAmount,discount) {
    var total = cartAmount - discount;
    console.log(total);
}
discount(500,250);