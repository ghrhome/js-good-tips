/**
 * Created by whobird on 2018/12/3.
 */

let p1= function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("p1");
        },1000);
    })
}

let p2= function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("p2");
        },0);
    })
}

async function test(){
    await p1().then(
        function(res){
            console.log(res);
        }
    ).catch(function(reason){

        console.log("catch :")
        console.log(reason)
    })



    await p2().then(
        function(res){
            console.log(res);
        }
    )
}
console.log("----------------")
test();

console.log("!!!!!!!!!!!!!!!!!")