
const body = document.body;
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
    body.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
    body.classList.remove('show');
});

jQuery(document).ready(function($){
    var cartWrapper = $('.cd-cart-container');
    //product id - you don't need a counter in your real project but you can use your real product id
    var productId = 0;

    if( cartWrapper.length > 0 ) {
        //store jQuery objects
        var cartBody = cartWrapper.find('.body')
        var cartList = cartBody.find('ul').eq(0);
        var cartTotal = cartWrapper.find('.checkout').find('span');
        var cartTrigger = cartWrapper.children('.cd-cart-trigger');
        var cartCount = cartTrigger.children('.count')
        var addToCartBtn = $('.cd-add-to-cart');
        var undo = cartWrapper.find('.undo');
        var undoTimeoutId;

        //add product to cart
        addToCartBtn.on('click', function(event){
            event.preventDefault();
            addToCart($(this));
        });

        //open/close cart
        cartTrigger.on('click', function(event){
            event.preventDefault();
            toggleCart();
        });

        //close cart when clicking on the .cd-cart-container::before (bg layer)
        cartWrapper.on('click', function(event){
            if( $(event.target).is($(this)) ) toggleCart(true);
        });

        //delete an item from the cart
        cartList.on('click', '.delete-item', function(event){
            event.preventDefault();
            removeProduct($(event.target).parents('.product'));
        });

        //update item quantity
        cartList.on('change', 'select', function(event){
            quickUpdateCart();
        });

        //reinsert item deleted from the cart
        undo.on('click', 'a', function(event){
            clearInterval(undoTimeoutId);
            event.preventDefault();
            cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
                quickUpdateCart();
            });
            undo.removeClass('visible');
        });
    }

    function toggleCart(bool) {
        var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;

        if( cartIsOpen ) {
            cartWrapper.removeClass('cart-open');
            //reset undo
            clearInterval(undoTimeoutId);
            undo.removeClass('visible');
            cartList.find('.deleted').remove();

            setTimeout(function(){
                cartBody.scrollTop(0);
                //check if cart empty to hide it
                if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
            }, 500);
        } else {
            cartWrapper.addClass('cart-open');
        }
    }

    function addToCart(trigger) {
        var cartIsEmpty = cartWrapper.hasClass('empty');
        //update cart product list
        addProduct();
        //update number of items
        updateCartCount(cartIsEmpty);
        //update total price
        updateCartTotal(trigger.data('price'), true);
        //show cart
        cartWrapper.removeClass('empty');
    }

    function addProduct() {
        //this is just a product placeholder
        //you should insert an item with the selected product info
        //replace productId, productName, price and url with your real product info
        productId = productId + 1;
        var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="img/product-preview.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Product Name</a></h3><span class="price">$25.99</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
        cartList.prepend(productAdded);
    }

    function removeProduct(product) {
        clearInterval(undoTimeoutId);
        cartList.find('.deleted').remove();

        var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
            productQuantity = Number(product.find('.quantity').find('select').val()),
            productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;

        product.css('top', topPosition+'px').addClass('deleted');

        //update items count + total price
        updateCartTotal(productTotPrice, false);
        updateCartCount(true, -productQuantity);
        undo.addClass('visible');

        //wait 8sec before completely remove the item
        undoTimeoutId = setTimeout(function(){
            undo.removeClass('visible');
            cartList.find('.deleted').remove();
        }, 8000);
    }

    function quickUpdateCart() {
        var quantity = 0;
        var price = 0;

        cartList.children('li:not(.deleted)').each(function(){
            var singleQuantity = Number($(this).find('select').val());
            quantity = quantity + singleQuantity;
            price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
        });

        cartTotal.text(price.toFixed(2));
        cartCount.find('li').eq(0).text(quantity);
        cartCount.find('li').eq(1).text(quantity+1);
    }

    function updateCartCount(emptyCart, quantity) {
        if( typeof quantity === 'undefined' ) {
            var actual = Number(cartCount.find('li').eq(0).text()) + 1;
            var next = actual + 1;

            if( emptyCart ) {
                cartCount.find('li').eq(0).text(actual);
                cartCount.find('li').eq(1).text(next);
            } else {
                cartCount.addClass('update-count');

                setTimeout(function() {
                    cartCount.find('li').eq(0).text(actual);
                }, 150);

                setTimeout(function() {
                    cartCount.removeClass('update-count');
                }, 200);

                setTimeout(function() {
                    cartCount.find('li').eq(1).text(next);
                }, 230);
            }
        } else {
            var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
            var next = actual + 1;

            cartCount.find('li').eq(0).text(actual);
            cartCount.find('li').eq(1).text(next);
        }
    }

    function updateCartTotal(price, bool) {
        bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
    }
});



$(document).ready(function() {
    $.get("//130.193.59.146/index.php?&phoneone", function (data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function (key, value) {
            html += '<p>Name: <a href="../OnePhone.php" target="_blank">' + value["name"] + '</a></p>';
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

    $.get("//130.193.59.146/index.php?&phonetwo", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<p>Name: <a href="TwoPhone.php" target="_blank">' + value["name"] + '</a></p>';
            html += '<p>Price: ' + value["price"] + '</p>';
        });
        $('#tabletwo').html(html);
    });
    $.get("//130.193.59.146/index.php?&imgtwo", function(data) {
        var jsonObj = $.parseJSON(data);
        var html = '';
        $.each(jsonObj, function(key, value){
            html += '<img src="' + value["bigURL"] +'" alt="apple iphone 12 pro max 512gb gold" width="350" height="600">';
        });
        $('#imagetabletwo').html(html);
    });

    ////////////////////////////////////
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
