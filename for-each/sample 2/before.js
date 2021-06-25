// This is a simplified piece of code, all the names have been changed to "fruit-like" objects for better context

// Apple
const totalApple = 10;
let appleHarvested = 0;

// Orange
const totalOrange = 15;
let orangeHarvested = 0;


function harvestApple(quantity) {
    if (appleHarvested === totalApple) return; // all apple harvested
    if (quantity >= totalApple) {
        appleHarvested = totalApple;
        return;
    }
    appleHarvested += quantity;
    if (appleHarvested > totalApple) appleHarvested = totalApple;
}

function harvestOrange(quantity) {
    if (orangeHarvested === totalOrange) return; // all apple harvested
    if (quantity >= totalOrange) {
        orangeHarvested = totalOrange;
        return;
    }
    orangeHarvested += quantity;
    if (orangeHarvested > totalOrange) orangeHarvested = totalOrange;
}

function harvestEverything() {
    harvestApple(totalApple);
    harvestOrange(totalOrange);
}

/**
 * As you can see in this code there are 2 sets of object: APPLE and ORANGE
 * The worth-noticing part is they do the same thing: 
 * 1. totalApple and totalOrange both have the same data-type, both represent the similar meaning
 * 2. appleHarvested and orangeHarvested both have the same data-type, both represent the similar meaning
 * 2. harvestApple and harvestOrange technically are doing the same thing, 
 *    only different is they're affecting the value of different variable (appleHarvested vs orangeHarvested)
 * 3. Based on how this code is written, you you want to add an extra Fruit (ex: Mango), 
 *    there will also be 2 more variable: totalMango, mangoHarvested and 1 more function (harvestMango())
 * So with a simple semantic change, combine with for-loop, we can make this more dynamic. => Check after.js
 */

// Below will be the amount of extra code if you want to add another fruit (Mango)
const totalMango = 20;
let mangoHarvested = 0;

function harvestMango(quantity) {
    if (mangoHarvested === totalMango) return; // all apple harvested
    if (quantity >= totalMango) {
        mangoHarvested = totalMango;
        return;
    }
    mangoHarvested += quantity;
    if (mangoHarvested > totalMango) mangoHarvested = totalMango;
}