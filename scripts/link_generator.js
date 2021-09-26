// generate the links for the page here

var links = [
    {
        label: "Home Page",
        url: "index.html"
    },
    {
        label: "Week1 notes",
        url: "week01/week01-notes.html"
    },
    {
        label: "Week2 notes",
        url: "week02/week02-notes.html"
    },
    {
        label: "Week3 notes",
        url: "week03/week03-notes.html"
    }
];

window.addEventListener('load', () => {
    var linkList = document.getElementById('linked-list');
    var title = document.title;

    for (let i = 0; i < links.length; i++) {
        var link = document.createElement('a');

        if (title === 'Home') {
            link.href = links[i].url;
        } else {
            link.href = '../' + links[i].url;
        }

        link.innerHTML = links[i].label;

        var element = document.createElement('li');
        element.appendChild(link);
        linkList.appendChild(element);
    }
});
