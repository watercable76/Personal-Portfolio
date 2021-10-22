/************************************
 * Local Storage Functions
 * 
 * 
 ************************************/

// get data based on state that is input
getData = (state) => {
    var ls = localStorage.getItem(state);
    ls = ls ? ls.split(",") : [];

    return ls;
}

// clear all localstorage data
clearTasks = () => {
    localStorage.clear();
    location.reload();
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
 * 
 * 
 ************************************/

// set a framework for the data
convertContent = (task, state) => {
    var li = document.createElement("li");
    li.setAttribute("class", "card__item")

    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.className = "btn checkbox-btn";
    btn.innerHTML = state ? "X" : " ";
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
    });

    var p = document.createElement("p");
    p.className = "task-data";
    p.innerHTML = task;
    if(state) {
        p.classList.add("crossed-text");
    }

    var btn2 = document.createElement("button");
    btn2.className = "btn big_x";
    btn2.innerHTML = "X";

    li.appendChild(btn);
    li.appendChild(p);
    li.appendChild(btn2);

    return li;
}

// on submit of the input element
function updateTasks() {
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

        // set input field to be emtpy after adding data to local storage
        document.getElementById("task").value = "";

        // update the list after setting new values
        var new_list = convertContent(data);
        const ol = document.getElementById("task-list");
        ol.appendChild(new_list);
    }
}


// on load of page, create the list elements
window.addEventListener("load", () => {
    // create the elements
    const ol = document.getElementById("task-list");

    var lsi = getData("inactive");
    lsi.forEach(data => {
        var li = convertContent(data, "inactive");
        ol.appendChild(li);
    });

    var lsa = getData("active");
    lsa.forEach(data => {
        var li = convertContent(data);
        ol.appendChild(li);
    });
});