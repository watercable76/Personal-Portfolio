// generate the links for the page here

var links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
];

window.addEventListener('load', () => {
    var linkList = document.getElementById('linked-list');

    for (let i = 0; i < links.length; i++) {
        var link = document.createElement('a');
        link.href = links[i].url;
        link.innerHTML = links[i].label;
        var element = document.createElement('li');
        element.appendChild(link);
        linkList.appendChild(element);
    }
});
