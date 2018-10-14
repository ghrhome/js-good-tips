const turtle={
    name:"Bob 🐢",
    legs:4,
    shell:true,
    type:"amphibious",
    meal:10,
    diet: "berries"
}

'bad Code 💩'
function feed(animal){
    return `Feed ${animal.name} ${animal.meal} kilo of ${animal.diet}`
}

'Good Code 🎖'
function feed({name,meal,diet}){
    return `Feed ${name} ${meal} kilo of ${diet}`
}

function feed(animal){
    let {name,meal,diet}=animal

    return `Feed ${name} ${meal} kilo of ${diet}`
}












