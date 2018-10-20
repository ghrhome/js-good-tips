'use strict';

/**
 * Created by whobird on 2018/10/14.
 */

var foo = {
    name: 'tom', age: 30, nervous: false
};

var bar = {
    name: 'dick', age: 40, nervous: false
};

var baz = {
    name: "harry", age: 50, nervous: true
};

'bad Code 💩';
console.log(foo);
console.log(bar);
console.log(baz);

console.log('%c My Friend', "color:Red;font-weight:bold");

'good Code 🎖';
console.log({ foo: foo, bar: bar, baz: baz });
console.table({ foo: foo, bar: bar, baz: baz });
console.table([foo, bar, baz]);

//console.time
console.time("loop");

var i = 0;
while (i < 100000000) {
    i++;
}
console.timeEnd("loop");

//console.trace
var testTrace = function testTrace() {
    console.count("count");
    console.trace("tracing function testTrace");
};

testTrace();
testTrace();