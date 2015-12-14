//Testing for Text File

/*use selector to chose id*/
//$('#update').load('data.txt');

/*use selector to chose class*/
//$('.update').load('data.txt');


//Testing for JSON File
$.getJSON('data.json', function (data) {
    var output = '<ul>'
    $.each(data, function (key, val) {
        output += '<li>' + val.name + '</li>' 
    });
    output += '</ul>'
    $('#update').append(output);
});
