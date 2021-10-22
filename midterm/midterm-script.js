/************************************
 * Local Storage Functions
 * 
 * clearTasks() - clear ls and reload page
 * getActiveCount() - get and set current active count of list
 * getData(state) - get ls data based on state in clean form
 * updateSet(data, state) - on click of a check btn, set new state in ls and remove from old list
 * 
 ************************************/

// clear all localstorage data
clearTasks = () => {
    localStorage.clear();
    location.reload();
}

// get and set current active count of list
getActiveCount = async () => {
    var count = getData("active");

    document.getElementById("task-qty").innerHTML = count.length;
}

// get data based on state that is input
getData = (state) => {
    var ls = localStorage.getItem(state);
    ls = ls ? ls.split(",") : [];

    return ls;
}

// update data to inactive
updateSet = (data, state) => {
    // s1 - state to get data from; s2 - state to set data into
    var s1, s2;
    if (state === "inactive") {
        s1 = state;
        s2 = "active";
    } else if (state === "active") {
        s1 = state;
        s2 = "inactive";
    }
    // read current data set and remove item
    var lsa = getData(s1);
    let new_lsa = [];

    // custom check of data and filtering new list
    let count = 0;
    for (let i = 0; i < lsa.length; i++) {
        if (lsa[i] == data && count === 0) {
            count++;
        } else {
            new_lsa.push(lsa[i]);
        }
    }
    localStorage.setItem(s1, new_lsa.toString());

    // add to new data set
    var lsi = getData(s2);
    lsi.push(data);
    localStorage.setItem(s2, lsi.toString());
}


/************************************
 * Task Functions
 * 
 * addListItems(state) - get state, retrieve data, append to page
 * addNewTask() - add new task to the list of tasks and ls 
 * convertContent(task, state) - framework to return full list item
 * resetPage() - clears list of items, removes active class from page
 * 
 ************************************/

// get and add elements to page
addListItems = (state) => {
    const ol = document.getElementById("task-list");

    var ls = localStorage.getItem(state);
    ls = ls ? ls.split(",") : [];

    ls.forEach(data => {
        var li = convertContent(data, state);
        ol.appendChild(li);
    });
}

// add new task to the list of tasks and ls
addNewTask = () => {
    // find data from user and prepare it for adding to json data
    const data = document.getElementById("task").value;

    if (data === "") {
        alert("Please enter a value in the text box!");
        return 0;
    } else {
        // update the local storage items
        var cur_data = getData("active");
        cur_data.push(data);
        localStorage.setItem("active", cur_data.toString());
        getActiveCount();

        // set input field to be emtpy after adding data to local storage
        document.getElementById("task").value = "";

        // update the list after setting new values
        var new_list = convertContent(data);
        const ol = document.getElementById("task-list");
        ol.appendChild(new_list);
    }
}

// set a framework for the data
convertContent = (task, state) => {
    const inactiveState = state === "inactive" ? true : false;
    var li = document.createElement("li");
    li.setAttribute("class", "card__item")

    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.className = "btn checkbox-btn";
    btn.innerHTML = inactiveState ? "X" : " ";
    btn.addEventListener("click", (event) => {
        // set itself to value here
        if (event.target.innerHTML === " ") {
            event.target.innerHTML = "X";
            event.target.nextElementSibling.classList.add("crossed-text");
            updateSet(event.target.nextElementSibling.innerHTML, "active");
        } else {
            event.target.innerHTML = " ";
            event.target.nextElementSibling.classList.remove("crossed-text");
            updateSet(event.target.nextElementSibling.innerHTML, "inactive");
        }
        getActiveCount();
    });

    var p = document.createElement("p");
    p.className = "task-data";
    p.innerHTML = task;
    if (inactiveState) {
        p.classList.add("crossed-text");
    }

    var btn2 = document.createElement("button");
    btn2.className = "btn big_x";
    btn2.innerHTML = "X";
    btn2.addEventListener("click", (event) => {
        // find data, pass to remove function(will update and remove item)
        console.log(event);
        console.log(event.target.previousElementSibling.innerHTML);
        deleteListItem(event.target.previousElementSibling.innerHTML);
        getActiveCount();
    });

    li.appendChild(btn);
    li.appendChild(p);
    li.appendChild(btn2);

    return li;
}

// delete item from list
deleteListItem = (data) => {
    // see if data in active list
    var lsa = getData("active");
    let new_lsa = [];

    let c1 = 0;
    for (let i = 0; i < lsa.length; i++) {
        if (lsa[i] == data && c1 === 0) {
            c1++;
        } else {
            new_lsa.push(lsa[i]);
        }
    }
    localStorage.setItem("active", new_lsa.toString());

    // see if data is in inactive list
    var lsi = getData("inactive");
    var new_lsi = [];
    let c2 = 0;
    for (let i = 0; i < lsi.length; i++) {
        if (lsi[i] == data && c2 === 0) {
            c2++;
        } else {
            new_lsi.push(lsi[i]);
        }
    }
    localStorage.setItem("inactive", new_lsi.toString());
    console.log("Data deleted from local storage");
    location.reload();
}

// create function to set all spans to not active class
resetPage = () => {
    // remove active class from page
    var activeClass = document.getElementsByClassName("active");
    while (activeClass.length) {
        activeClass[0].classList.remove("active");
    }

    // clear list elements from list
    const ol = document.getElementById("task-list");
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild)
    }
}

// on load of page, create the list elements
window.addEventListener("load", () => {
    // add inactive and active items to list
    addListItems("inactive");
    addListItems("active");

    // set active count number
    getActiveCount();

    // set event listeners for the span items
    var all = document.getElementById("task-all");
    var active = document.getElementById("task-active");
    var inactive = document.getElementById("task-inactive");

    // set event listener for all items
    all.addEventListener("click", () => {
        resetPage();
        all.classList.add('active');

        // add inactive and active items to list 
        addListItems("inactive");
        addListItems("active");
    });

    // set active to load just active data
    active.addEventListener("click", () => {
        resetPage();
        active.classList.add('active');

        // add active items to list 
        addListItems("active");
    });

    // set only inactive data to load
    inactive.addEventListener("click", () => {
        resetPage();
        inactive.classList.add('active');

        // add inactive items to list 
        addListItems("inactive");
    });
});