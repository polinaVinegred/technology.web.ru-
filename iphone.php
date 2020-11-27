<?php require_once 'connectionjson.php'; ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>iphone</title>
        <script  src="/js/jquery.min.js"></script>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/js/jquery.dataTables.min.css" />
        <link rel="stylesheet"  href="iphonestyle.css" />
    </head>

    <body>
    <header>
        <div class="header-one-title">
            <h1 class="logo">CrazyTechnology.com
                <div class="contactMenu">
                    <a class="wols" href="favourites.php">избранное</a> <br/>
                    <a class="wols" href="basket.php" target="_blank">корзина</a>
                </div>
            </h1>
        </div>
        <div class="header-two-title">
            <div class="menu">
                <ul id="myMenu">
                <div id="boxsearch">
                    <form class="container-1">
                        <span class="icon"><i class="fa fa-search"></i></span>
                        <input type="search" id="search" onkeyup="myFunction()" placeholder="Поиск..." />
                    </form>
                </div>
                    <li><a class="ultest" href="macBook.php" target="_blank">MacBook</a></li>
                    <li><a class="ultest" href="iphone.php" target="_blank">Iphone</a></li>
                    <li><a class="ultest" href="watch.php" target="_blank">Watch</a></li>
                    <li><a class="ultest" href="ipad.php" target="_blank">Ipad</a></li>
                    <li><a class="ultest" href="goods.php" target="_blank">О товарах</a></li>
                    <li><a class="ultest" href="sale.php" target="_blank">Скидки</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div class="cd-cart-container empty">
    <a href="#0" class="cd-cart-trigger">
        <ul class="count">
            <li>0</li>
            <li>0</li>
        </ul>
    </a>
    <div class="cd-cart">
        <div class="wrapper">
            <header>
                <h2>Корзина</h2>
                <span class="undo">Item removed. <a href="#0">Undo</a></span>
            </header>
        <div class="body">
            <ul>
            </ul>
        </div>
        <footer>
            <a href="#0" class="checkout btn"><em>Checkout - $<span>0</span></em></a>
        </footer>
        </div>
    </div>
    </div>
    <div class="container-body">
        <h1 class="nameh1">Iphone</h1>
        <div class="button">
            <a href="#0" class="cd-add-to-cart" data-price="25.99">Добавить в корзину
                <span class="shift">›</span>
            </a>
            <div class="mask"></div>
        </div>

        <div id="table"></div>
        <div id="imagetable"></div>
        <div class="button">
            <a href="#0" class="cd-add-to-cart" data-price="25.99">Добавить в корзину
                <span class="shift">›</span>
            </a>
            <div class="mask"></div>
        </div>
        <div id="tabletwo"></div>
        <div id="imagetabletwo"></div>

       <div id="tablefour"></div><div id="imagetablefour"></div>
    <div id="tablefife"></div><div id="imagetablefife"></div>
    <div id="tablesix"></div><div id="imagetablesix"></div>
    </div>
    <script src="inputPphone.js"></script>
    <script src="/js/jquery.dataTables.min.js"></script>
    </body>
</html>


<!--<div id="easynetshop-cart">-->
<!--    <div id="enscart_my_wrapper">-->
<!--        <div id="enscart_myimage_wrapper">-->
<!--            <img src="https://i.ibb.co/ZfJ03Ns/shop1.png">-->
<!--        </div>-->
<!--        <div id="enscart_my_counter_wrapper"><span  id="easynetshop-cart-count"> 0 </span></div>-->
<!--    </div>-->
<!--</div>-->