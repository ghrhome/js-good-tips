/**
 * Created by whobird on 2018/10/15.
 */

const orders=[500,20,99,15,223]

'Bad Loop Code 💩'

const total=0;
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
}


'Good Loop code 🎖'
//reduce
const total=orders.reduce((acc,cur)=>{
        return acc+cur
    }
)
//map
const withtax=orders.map( v => v*1.1);
//filter
const highValue=orders.filter(v => v>100);
