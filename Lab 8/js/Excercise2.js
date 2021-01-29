var a = -5;
var b = -2;
var c = 17;
console.log("value of a is", a);
console.log("value of b is", b);
console.log("value of c is", c);

if ((a > b) && (a > c)) {
    console.log("a is the greatest number");
} else if ((b > a) && (b > c)) {
    console.log("b is the greatest number");
} else if ((c > a) && (c > b)) {
    console.log("c is the greatest number");
}
