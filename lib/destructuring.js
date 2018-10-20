"use strict";

var turtle = {
    name: "Bob 🐢",
    legs: 4,
    shell: true,
    type: "amphibious",
    meal: 10,
    diet: "berries"
};

'bad Code 💩';
function feed(animal) {
    return "Feed " + animal.name + " " + animal.meal + " kilo of " + animal.diet;
}

'Good Code 🎖';
function feed(_ref) {
    var name = _ref.name,
        meal = _ref.meal,
        diet = _ref.diet;

    return "Feed " + name + " " + meal + " kilo of " + diet;
}

function feed(animal) {
    var name = animal.name,
        meal = animal.meal,
        diet = animal.diet;


    return "Feed " + name + " " + meal + " kilo of " + diet;
}