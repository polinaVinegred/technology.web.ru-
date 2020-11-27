$(document).ready(function() {

    $.get("//130.193.59.146/index.php?&phoneone", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name:' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#table').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgone", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="370" height="600">';
        });
        $('#imagetable').html(html);
    });

    $.get("//130.193.59.146/OnePhone.php?&iphone", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '<table id="tabchar" border="1">';
        $.each(jsonObj, function(key, value){
            html += '<tr>';
            html += '<td>' + value["name"] + '</td>';
            html += '<td>' + value["value"] + '</td>';
            html += '</tr>';
        });
        html += '</table>';
        $('#characteristictable').html(html);
    });
    $("#button").click(function() {
        $('#tabchar').DataTable();
    });
});
