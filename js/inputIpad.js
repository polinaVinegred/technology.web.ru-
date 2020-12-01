$(document).ready(function() {
    $.get("//130.193.59.146/index.php?&phonethree", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name: ' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
            html += '<button id="choice">Добавить в корзину</button>';
        });
        $('#table').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgthree", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="450" height="600">';
        });
        $('#imagetable').html(html);
    });
});

$.get("//130.193.59.146/index.php?&ipadgold", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#ipadgold').html(html);
});
$.get("//130.193.59.146/index.php?&imgipadgold", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imagetableipadgold').html(html);
});

$.get("//130.193.59.146/index.php?&ipadgray", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#ipadgray').html(html);
});
$.get("//130.193.59.146/index.php?&imgipadgray", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imagetableipadgrey').html(html);
});

$.get("//130.193.59.146/index.php?&ipadwhite", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#ipadwhite').html(html);
});
$.get("//130.193.59.146/index.php?&imgipadwhite", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imagetableipadwhite').html(html);
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