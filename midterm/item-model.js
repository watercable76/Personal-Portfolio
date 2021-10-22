/************************************
 * Data Template Functions
 * 
 ************************************/

// convert content into a value that can be used to add data to the page
exports.convertContent = (task) => {
    var li = document.createElement("li");
    li.setAttribute("class", "card__item")

    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.className = "checkbox-btn";
    btn.innerHTML = " ";
    btn.addEventListener("click", (event) => {
        console.log(event);
        // set itself to value here
        if (event.target.innerHTML === " ") {
            event.target.innerHTML = "X";
            event.target.nextElementSibling.setAttribute("class", "crossed-text");
            // get rid of data from active set, and put in inactive set
            updateActiveSet(event.target.nextElementSibling.innerHTML);
        } else {
            event.target.innerHTML = " ";
            event.target.nextElementSibling.classList.remove("crossed-text");
            updateInactiveSet(event.target.nextElementSibling.innerHTML);
        }
    });

    var p = document.createElement("p");
    p.innerHTML = task;
    p.setAttribute("class", "task-data");

    var div = document.createElement("div");
    div.className = "big_x";
    div.innerHTML = "X";

    li.appendChild(btn);
    li.appendChild(p);
    li.appendChild(div);

    return li;
}