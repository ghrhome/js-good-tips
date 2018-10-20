/**
 * Created by whobird on 2018/10/15.
 */

const orders=[500,20,99,15,223]

'Bad Loop Code 💩'

/*let total=0;
const withTax=[];
const hightValue=[];

for(i=0;i<orders.length;i++){
    //reduce
    total += orders[i];
    //Map
    withTax.push(orders[i]*1.1);

    if(order[i]>100){
        hightValue.push(orders[i])
    }
}*/


'Good Loop code 🎖'
//reduce
let total=orders.reduce((acc,cur)=>{
        return acc+cur
    }
)
//map
let withtax=orders.map( v => v*1.1);
//filter
let highValue=orders.filter(v => v>100);

console.log(total)

/*
es6的Object.keys()和map()组合使用的案例
ES6语法，把对象转化为对象数组。
{k1:v1.k2:v2,k3:v3}转化成[{key:k1,value:v1},{key:k2,value:v2},{key:k3,value:v3}]的形式
 */

const p={width:30,height:20,weight:60};
const pArr= Object.keys(p).map(key=>({
    key,
    value:p[key]
}));
