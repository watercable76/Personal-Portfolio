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
    },
    {
        label: "Week4 notes",
        url: "week04/week04-notes.html"
    },
    {
        label: "Week5 notes",
        url: "week05/week05-notes.html"
    },
    {
        label: "Midterm Project",
        url: "midterm/mid-term.html"
    },
    {
        label: "Week7 notes",
        url: "week07/week07-notes.html"
    },
    {
        label: "Week8 notes",
        url: "week08/week08-notes.html"
    },
    {
        label: "Week9 notes",
        url: "week09/week09-notes.html"
    },
    {
        label: "Week10 notes",
        url: "week10/week10-notes.html"
    },
    {
        label: "Final Project",
        url: "final/final-project.html"
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
