let slider = document.getElementById("rangeControl");
let valueLabel = document.getElementById("rangeValue");
let personSelect = document.getElementById("personSelect");
let totalPizza = document.getElementById("totalPizza");
let totalSides = document.getElementById("totalSides");
let pizzaBox = document.getElementById("pizzaBox");
let sides = document.getElementById("sides");
let pizzas = document.getElementById("pizzas");
let sidesHeading = document.getElementById("sidesHeading");

let value = slider.value / 100;
let maxPeople = 50;

for (let i = 0; i < maxPeople; i++) {
    let elem = document.createElement("option");
    elem.innerHTML = i + 1;
    personSelect.appendChild(elem);
}

valueLabel.innerHTML = value;

function loadValues() {
    let pizzaVal = Math.ceil(personSelect.value * valueLabel.innerHTML);
    totalPizza.innerHTML = pizzaVal;

    if (pizzaVal > 1) {
        pizzas.innerHTML = "Pizzas";
    } else {
        pizzas.innerHTML = "Pizza";
    }

    pizzaBox.innerHTML = "";
    for (let i = 0; i < pizzaVal; i++) {
        let pizzaBase = document.createElement("div");
        pizzaBase.classList.add("pizzaBase");

        pizzaBox.appendChild(pizzaBase);
    }

    sides.innerHTML = ""
    if (pizzaVal > 3) {
        sidesHeading.style.display = "block";
        let numSides = Math.ceil(pizzaVal / 3);
        for (let i = 0; i < numSides; i++) {
            let side = document.createElement("div");
            side.classList.add("side");
            sides.appendChild(side);
        }
        totalSides.innerHTML = numSides;
    } else {
        sidesHeading.style.display = "none";
    }

    fadeElems()
}

function sleep (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function fadeElems() {
    for (let i = 0; i < pizzaBox.children.length; i++) {
        const element = pizzaBox.children[i];
        await sleep(80)
        element.style.opacity = 1;
    }

    for (let i = 0; i < sides.children.length; i++) {
        const element = sides.children[i];
        await sleep(80)
        element.style.opacity = 1;
    }
}

loadValues();

slider.addEventListener("input", (e) => {
    valueLabel.innerHTML = e.target.value / 100;
    loadValues();
});

personSelect.addEventListener("input", (e) => {
    loadValues();
})