
const bad_array = ['this', 'is', 'a', 'very', 'bad', 'practice', 'since', 'console.log', 'is', 'annoying', 'as', 'crud'];
var nums = new Set();
var set_max = 25;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const calculate_speed = (() => {
    let weight_grams = 241;
    let drag = 0.08758;
    let density = 2.2471;
    let power = getRandomInt(2, 20);
    let coconuts = getRandomInt(1, 10);

    let mumbo_jumo_math = ((weight_grams * drag) / density) ** power;
    let lpc = mumbo_jumo_math / coconuts;
    return `${mumbo_jumo_math.toFixed(4)} lpc (leagues per coconut)`;
});

// find and do some work with template literals
window.addEventListener('load', () => {
    // variables and setting values
    var item = document.getElementById("list-content");

    var data = new String('window.addEventListener');

    item.innerHTML = `${data} is demonstrating an example of using string templates.`;

    // sets and loops and other important data
    bad_array.forEach((value) => {
        console.log(value);
    });

    for (let i = 0; i < set_max; i++) {
        var rando = getRandomInt(i, set_max);
        nums.add(rando);
    }
    var set_array = new Array(...nums);
    document.getElementById('set-content').innerHTML = `${set_array.join(' ')}`;
    document.getElementById('set-length').innerHTML = `The total number of values in the set are: ${set_array.length} out of ${set_max} possible values`;


    // function notes and work
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => { document.getElementById(`li-dots`).innerHTML += '. '; }, 1000 * i);
    }

    var calculate = document.createElement('li');
    calculate.innerHTML = calculate_speed();
    setTimeout(() => { document.getElementById(`calculation`).appendChild(calculate)}, 10000);
});
