const fruits = {
    apple: {
        total: 10,
        harvested: 0
    },
    orange: {
        total: 15,
        harvested: 0
    },
    mango: {
        total: 20,
        harvested: 0
    }
};

// The key importnat here is the "fruitType" keyword
function harvestFruit(fruitType, quantity) {
    if (fruits[fruitType].harvested === fruits[fruitType].total) return;
    if (quantity >= fruits[fruitType].total) {
        fruits[fruitType].harvested = fruits[fruitType].total;
        return;
    }
    fruits[fruitType].harvested += quantity;
    if (fruits[fruitType].harvested > fruits[fruitType].total) 
        fruits[fruitType].harvested = fruits[fruitType].total;
}

function harvestEverything() {
    Object.keys(fruits).forEach(key => {
        harvestFruit(key, fruits[key].total);
    });
}