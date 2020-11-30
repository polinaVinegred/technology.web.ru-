$(document).ready(function() {
    $.get("//130.193.59.146/index.php?&watchgold", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name: ' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
            html += '<button id="choice">Добавить в корзину</button>';
        });
        $('#tabletwo').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgwatch", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="watch gold">';
        });
        $('#imagetabletwo').html(html);
    });
});

$.get("//130.193.59.146/index.php?&watchblue", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#watchblue').html(html);
});
$.get("//130.193.59.146/index.php?&imgwatchblue", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgwatchblue').html(html);
});

$.get("//130.193.59.146/index.php?&watchred", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#watchred').html(html);
});
$.get("//130.193.59.146/index.php?&imgwatchred", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgwatchred').html(html);
});

$.get("//130.193.59.146/index.php?&watchwhite", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<p>Name:' + value["name"] + '</p>';
        html += '<p>Price: ' + value["price"] + '</p>';
    });
    $('#watchwhite').html(html);
});
$.get("//130.193.59.146/index.php?&imgwatchwhite", function (data) {
    var jsonObj = $.parseJSON(data);
    var html = '';
    $.each(jsonObj, function (key, value) {
        html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
    });
    $('#imgwatchwhite').html(html);
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
