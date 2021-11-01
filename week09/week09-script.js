// Objects and literals

// const form = document.forms['data'];

window.addEventListener('load', () => {
    const form = document.data;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(form);
        const person = {};
        person.name = form.name.value;
        alert(JSON.stringify(person));

        return person;
    }, false);

});

// OO programming
class Dice {
    constructor(race, level, sides = 20) {
        this.sides = sides;
        this.race = race;
        this.level = level;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way to roll for initiative'
    }
}

function buttonClick() {
    let stuff = new Dice("Dragonborn", 3);
    document.getElementById('outputData').innerHTML = stuff.roll();
}