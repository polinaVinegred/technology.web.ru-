<?php require_once 'php/connectionjson.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>technology.com</title>
    <script  src="/jquery/jquery.js"></script>
    <link rel="stylesheet"  href="css/style.css" />
</head>
<body>
<div class="container">
    <header>
        <div class="wrapper">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>
        <div class="header-one-title">
<!--            <div class="menu-basket-favorites-account">-->
<!--                <a class="wols" href="#" target="_blank">Избранное</a>-->
<!--                <a class="wols" href="basket.php" target="_blank">Корзина</a>-->
<!--                <a class="wols" href="#" target="_blank">Аккаунт</a>-->
<!--            </div>-->
            <div class="logo">
                <h1>Technologies around us.</h1>
            </div>
<!--            <div class="menu-search-and-contact">-->
<!--                <a class="wols" href="test.php" target="_blank">Контакты</a>-->
<!--                <a class="wols" href="favourites.php">Поиск</a>-->
<!--            </div>-->
        </div>

        <div class="menu-container">
            <div class="header-two-title">
                <div class="menu">
                <ul id="myMenu">
                    <li><a class="ultest" href="php/macBook.php" target="_blank">MacBook</a></li>
                    <li><a class="ultest" href="php/iphone.php" target="_blank">Iphone</a></li>
                    <li><a class="ultest" href="php/watch.php" target="_blank">Watch</a></li>
                    <li><a class="ultest" href="php/ipad.php" target="_blank">Ipad</a></li>
                </ul>
                </div>
            </div>
            <hr>
            <div class="header-three-title">
                <div class="menu">
                    <ul id="myMenu">
                        <li><a class="uitest" href="php/goods.php" target="_blank">About goods</a></li>
                        <li><a class="uitest" href="php/sale.php" target="_blank">Discounts</a></li>
                    </ul>
                </div>
            </div>


            <div id="boxsearch">
                <form class="container-1">
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <input type="search" id="search" onkeyup="myFunction()" placeholder="Поиск..." />
                </form>
            </div>
        <div class="banner">
            <img src="pictures/phonefone.jpg" title="banner" width="100%">
        </div>
        </div>
    </header>
    <div class="container-tech">
        <div class="ipad">
            <div id="table"></div><div id="imagetable"></div>
            <div id="ipadgold"></div><div id="imagetableipadgold"></div>
            <div id="ipadgray"></div><div id="imagetableipadgrey"></div>
            <div id="ipadwhite"></div><div id="imagetableipadwhite"></div>
        </div>
        <div class="macbook">
            <div id="tableone"></div><div id="imagetableone"></div>
            <div id="macgrey"></div><div id="imgmacgrey"></div>
            <div id="macmini"></div><div id="imgmacmini"></div>
            <div id="imac"></div><div id="imgimac"></div>
        </div>
        <div class="iphone">
            <div id="tablethree"></div><div id="imagetablethree"></div>
            <div id="tablefour"></div><div id="imagetablefour"></div>
            <div id="tablefife"></div><div id="imagetablefife"></div>
            <div id="tablesix"></div><div id="imagetablesix"></div>
        </div>
        <div class="watch">
            <div id="tabletwo"></div><div id="imagetabletwo"></div>
            <div id="watchblue"></div><div id="imgwatchblue"></div>
            <div id="watchred"></div><div id="imgwatchred"></div>
            <div id="watchwhite"></div><div id="imgwatchwhite"></div>
        </div>
    </div>
  <script src="/js/tableconversions.js"></script>
</div>
</body>
</html>
