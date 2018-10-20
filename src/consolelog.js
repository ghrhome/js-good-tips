/**
 * Created by whobird on 2018/10/14.
 */

const foo={
    name:'tom',age:30, nervous:false
};

const bar={
    name:'dick',age:40,nervous:false
};

const baz={
    name:"harry",age:50,nervous:true
};

'bad Code 💩'
console.log(foo)
console.log(bar)
console.log(baz)


console.log('%c My Friend',"color:Red;font-weight:bold")

'good Code 🎖'
console.log({foo,bar,baz});
console.table({foo,bar,baz})
console.table([foo,bar,baz])


//console.time
console.time("loop")

let i=0;
while(i<100000000){
    i++;
}
console.timeEnd("loop")

//console.trace
let testTrace=()=>{
    console.count("count")
    console.trace("tracing function testTrace")
}


testTrace();
testTrace();

























