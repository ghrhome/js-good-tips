/**
 * Created by whobird on 2018/10/15.
 */

const random=() => {
    console.trace('promise-----')
    return Promise.resolve(Math.random());
}

'Bad'

/*const sumRandomAsyncNums=() =>{
    let first;
    let second;
    let third;

    return random().then(v=>{

        first=v;
        return random();

    }).then( v=>{

        second=v;
        return random();

    }).then( v=>{

        third=v;
        console.log(v)
        return first+second+third;
    }).then(v=>{

        console.log(`Result is: `+v)

    })
}*/

'good'

const sumRandomAsyncNums=async()=>{
    const first=await random();
    const second=await random();
    const third=await random();

    console.log(`result is: ${first+second+third}`);
}


sumRandomAsyncNums()