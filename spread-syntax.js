/**
 * Created by whobird on 2018/10/15.
 */

const pikachu={
    name:"Pikachu 🐣"
}
const stats={
    hp:40, attack:60, defence:45
}

'bad Code 💩'

pikachu['hp']=stats.hp;
pikachu['attack']=stats.attack;
pikachu['defence']=stats.defence;
//or
const lv1=Object.assign(pikachu,stats);
const lv2=Object.assign(pikachu,{hp:45});

'Good Code 🎖'

const lv1={...pikachu,...stats};
const lv2={...pikachu,...{hp:45}};

//arrays
let pokemon=['Arbok', 'Raichu', 'Sandshrew'];

'bad Code 💩'
pokemon.push("Bulbasaur");
pokemon.push("Metapod");
'Good Code 🎖'
pokemon=[...pokemon,'Bulbasaur',"metapod"];

console.log(pokemon);













