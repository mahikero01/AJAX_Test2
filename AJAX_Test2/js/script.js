
var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function () {
    if ((request.readyState === 4) && (request.status === 200)) {
        var modify =
            document.getElementsByTagName('ul')
                    [1].getElementsByTagName('li');
            modify[2].innerHTML = request.responseText;
    }
}
request.send();
    
