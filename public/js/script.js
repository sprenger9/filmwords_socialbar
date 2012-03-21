window.onload = function() {
    window.setInterval(function() {
        var myDiv = document.createElement('div');
        var textEl = document.createTextNode('HALLOOOOO !');
        myDiv.appendChild(textEl);
        document.body.appendChild(myDiv);
    }, 8000);
}
