$(document).ready(function() {
    $.get("//130.193.59.146/index.php?&phonefour", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<p>Name: ' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
            html += '<button id="choice">Добавить в корзину</button>';
        });
        $('#table').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgfour", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<img src="' + value["bigURL"] +'" alt="apple iphone 12 pro max 512gb gold" width="800" height="600">';
        });
        $('#imagetable').html(html);
    });
});

$.get("//130.193.59.146/index.php?&macgrey", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#macgrey').html(html);
});
$.get("//130.193.59.146/index.php?&imgmacgrey", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgmacgrey').html(html);
});

$.get("//130.193.59.146/index.php?&macmini", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#macmini').html(html);
});
$.get("//130.193.59.146/index.php?&imgmacmini", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgmacmini').html(html);
});

$.get("//130.193.59.146/index.php?&imac", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#imac').html(html);
});
$.get("//130.193.59.146/index.php?&imgimac", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgimac').html(html);
});
function myFunction() {
    // Объявить переменные
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};