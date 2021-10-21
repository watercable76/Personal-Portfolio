
// use local storage to store the data

convertContent = (task) => {
    var li = document.createElement('li');
    li.setAttribute('class', 'card__item')

    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.className = 'checkbox-btn';
    btn.innerHTML = ' ';
    btn.addEventListener('click', (event) => {
        console.log(event);
        // set itself to value here
        if (event.target.innerHTML === " ") {
            event.target.innerHTML = "X";
            event.target.nextElementSibling.setAttribute('class', 'crossed-text');
        } else {
            event.target.innerHTML = " ";
            event.target.nextElementSibling.classList.remove('crossed-text');
        }
    });

    var p = document.createElement('p');
    p.innerHTML = task;
    p.setAttribute('class', 'task-data');

    var div = document.createElement('div');
    div.className = 'big_x';
    div.innerHTML = 'X';

    li.appendChild(btn);
    li.appendChild(p);
    li.appendChild(div);

    return li;
}


function checkBox() {
    if (this.value == "") {
        this.value = "X";
    } else {
        this.value = "";
    }
}


// set the type of item to store a json object, then call that JSON and update it
// every time you change items in there
// localStorage.setItem('myCat', 'Tom');
// const cat = localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();


// on submit of the input element
function updateTasks() {
    // find data from user and prepare it for adding to json data
    const data = document.getElementById('task').value;

    if (data === "") {
        alert('Please enter a value in the text box!');
        return 0;
    } else {
        // update the local storage items
        var cur_data = localStorage.getItem('active');
        cur_data = cur_data ? cur_data.split(',') : [];

        cur_data.push(data);

        localStorage.setItem('active', cur_data.toString());

        document.getElementById('task').value = "";

        // update the list after setting new values
        var new_list = convertContent(data);
        const ol = document.getElementById('task-list');
        ol.appendChild(new_list);

    }

}


// on load of page, create the list elements
document.addEventListener('load', () => {
    // create the elements
    const ol = document.getElementById('task-list');

    const ls = localStorage.getItem('active');
    ls = ls ? ls : [];

    for (const i in ls) {
        const li = document.createElement('li');
        li.textContent = i;
        ol.appendChild(li);
    }
});