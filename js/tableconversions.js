//проверяем, что страница загрузилась
$(document).ready(function() {

    // // при нажатии на кнопку происходит подключение ко второй странице сайта и выводится содержимое json
    //  $("#connect").click(function () {
    //      $.get("//130.193.59.146/index.php?&json", function (data) {
    //          alert("Data: " + data);
    //      });
    //  });
    // при нажатии на кнопку происходит подключение ко второй странице сайта и выводится json преобразованный в таблицу


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
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold">';
        });
        $('#imagetable').html(html);
    });

    $.get("//130.193.59.146/index.php?&phonefour", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<p>Name: ' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
            html += '<button id="choice">Добавить в корзину</button>';
        });
        $('#tableone').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgfour", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<img src="' + value["bigURL"] +'" alt="apple iphone 12 pro max 512gb gold" width="800" height="600">';
        });
        $('#imagetableone').html(html);
    });

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

    $.get("//130.193.59.146/index.php?&phoneone", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name:' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#tablethree').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgone", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="370" height="600">';
        });
        $('#imagetablethree').html(html);
    });
    ///////////////////////////////////////////////////////////////////////
    $.get("//130.193.59.146/index.php?&phone12white", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name:' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#tablefour').html(html);
    });
    $.get("//130.193.59.146/index.php?&img12white", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="370" height="600">';
        });
        $('#imagetablefour').html(html);
    });

    $.get("//130.193.59.146/index.php?&phone12black", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name:' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#tablefife').html(html);
    });
    $.get("//130.193.59.146/index.php?&img12black", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="370" height="600">';
        });
        $('#imagetablefife').html(html);
    });

    $.get("//130.193.59.146/index.php?&phone12green", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name:' + value["name"] + '</p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#tablesix').html(html);
    });
    $.get("//130.193.59.146/index.php?&img12green", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<img src="' + value["bigURL"] + '" alt="apple iphone 12 pro max 512gb gold" width="370" height="600">';
        });
        $('#imagetablesix').html(html);
    });
///////////////////////////////////////////////////////
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
 //////////////////////////////////////////////////////////
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



    /////////////////////////////////////////////
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

    //////////////////////////////////////////////
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




    // $("form").on("submit", function(){
    //     alert("hello");
    // });