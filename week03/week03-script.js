// Objects and literals

const data = {
    name: "Maximilian",
    email: "coolio@foo.com",
    purpose: "Teach people all about others and the benefits of node.js",
}

function displayData() {
    document.getElementById('list-content').innerHTML = data.name + ' ' + data.email + "\nPurpose: " + data.purpose;
    const date = new Date();
    const cur_date = date.toDateString();
    document.getElementById('date-data').innerHTML = cur_date;
}

window.addEventListener('load', () => {
    const color_content = document.getElementById('colored-content');
    color_content.addEventListener('click', () => {
        // do something
        console.log(color_content.style);
        if (color_content.style.color == 'black') {
            color_content.style.color = 'white';
            color_content.style.backgroundColor = 'black';
            // color_content.style.fontSize = '20px';
        } else {
            color_content.style.color = 'black';
            color_content.style.backgroundColor = 'white';
            // color_content.style.fontSize = '16px';
        }
    });


    const list_content = document.getElementById('li-event');
    list_content.addEventListener('mouseenter', (event) => {
        event.target.style.fontSize = '20px';
    });
    list_content.addEventListener('mouseleave', (event) => {
        event.target.style.fontSize = '14px';
    });

    const txtArea = document.getElementById('finalData');
    txtArea.addEventListener('keypress', (event) => {
        console.log(`You pressed the ${event.key} character`);
    });
});

function addContent() {
    var li = document.createElement('li');
    li.textContent = "Here is some more content!!!";

    document.getElementById("notes-list").appendChild(li);
}