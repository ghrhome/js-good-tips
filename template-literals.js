/**
 * Created by whobird on 2018/10/15.
 */

const horse={
    name:"Topher 🐎",
    size:"large",
    skills:['jousting','racing'],
    age:7
}

'Bad String Code 💩'
let bio=horse.name + ' is a '+ horse.size + ' horse skills '+horse.skills.join("&")

'Good String Code 🎖'
const {name,size,skills}=horse;

bio=`${name} is a ${size} skilled in ${skills.join(" & ")}`;
console.log(bio)


function horseAge(str,age){
    const ageStr = age >5 ? 'old':"young";

    return `${str[0]}${ageStr} at ${age} years`;
}

//const bio2=horseAge`this horse is ${horse.age}`

//console.log(bio2)