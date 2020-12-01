<?php require_once 'php/connectionjson.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>basket</title>
    <script  src="/jquery/jquery.js"></script>
    <link rel="stylesheet"  href="css/basketstyle.css" />
</head>
<body>
<header>
    <div class="header-one-title">
        <h1 class="logo">CrazyTechnology.com
            <div class="contactMenu">
                <a class="wols" href="#">избранное</a> <br/>
                <a class="wols" href="php/basket.php" target="_blank">корзина</a>
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
                <li><a class="ultest" href="php/macBook.php" target="_blank">MacBook</a></li>
                <li><a class="ultest" href="php/iphone.php" target="_blank">Iphone</a></li>
                <li><a class="ultest" href="php/watch.php" target="_blank">Watch</a></li>
                <li><a class="ultest" href="php/ipad.php" target="_blank">Ipad</a></li>
                <li><a class="ultest" href="php/goods.php" target="_blank">О товарах</a></li>
                <li><a class="ultest" href="php/sale.php" target="_blank">Скидки</a></li>
            </ul>
        </div>
    </div>
</header>
<div class="container-body">
    <h1 class="nameh1">Basket</h1>
    <div id="table"></div><div id="imagetable"></div>
    <div id="tabletwo"></div><div id="imagetabletwo"></div>
</div>
<script src="js/inputbasket.js"></script>
</body>
</html>