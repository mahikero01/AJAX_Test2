
var request = new XMLHttpRequest();
/*
request.open('GET', 'data.txt');
request.onreadystatechange = function () {
    if ((request.readyState === 4) && (request.status === 200)) {
        var modify =
            document.getElementsByTagName('ul')
                    [1].getElementsByTagName('li');
            modify[2].innerHTML = request.responseText;
    }
}
*/

//Testing for xml usage
/*
request.open('GET', 'data.xml');
request.onreadystatechange = function () {
    if ((request.readyState === 4) && (request.status === 200)) {
        console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0].nodeValue);

        var items = request.responseXML.getElementsByTagName('name')
        var output = '<ul>'
        for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>'
        }
        output += '</ul>'

        document.getElementById('update').innerHTML = output;
    }
}
*/

//Testing for json usage
request.open('GET', 'data.json');
request.onreadystatechange = function () {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        console.log(items);
    }
}


request.send();
    
