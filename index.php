<?php require_once 'connectionjson.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>technology.com</title>
    <script  src="/js/jquery.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/js/jquery.dataTables.min.css" />
    <link rel="stylesheet"  href="style.css" />
</head>
<body>
    <header>
        <div class="header-one-title">
            <div class="menu-basket-favorites-account">
                <a class="wols" href="#" target="_blank"><img src="favorites.png" title="favorites" width="35" height="35"/></a>
                <a class="wols" href="basket.php" target="_blank"><img src="basket.png" title="basket" width="35" height="35"/></a>
                <a class="wols" href="#" target="_blank"><img src="account.png" title="kontakt" width="35" height="35"/></a>
            </div>
            <div class="logo">
                <h1>TECHNOLOGY</h1>
            </div>
            <div class="menu-search-and-contact">
                <a class="wols" href="test.php" target="_blank"><img src="kontakt.png" title="kontakt" width="35" height="35"/></a>
                <a class="wols" href="favourites.php"><img src="search.png" title="search" width="35" height="35"/></a>
            </div>
        </div>


        <div class="banner">
            <div class="header-two-title">
                <div class="menu">
                <ul id="myMenu">
                    <li><a class="ultest" href="macBook.php" target="_blank">MacBook</a></li>
                    <li><a class="ultest" href="iphone.php" target="_blank">Iphone</a></li>
                    <li><a class="ultest" href="watch.php" target="_blank">Watch</a></li>
                    <li><a class="ultest" href="ipad.php" target="_blank">Ipad</a></li>
                    <li><a class="ultest" href="goods.php" target="_blank">О товарах</a></li>
                    <li><a class="ultest" href="sale.php" target="_blank">Скидки</a></li>
                </ul>
                </div>
            </div>

            <div id="boxsearch">
                <form class="container-1">
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <input type="search" id="search" onkeyup="myFunction()" placeholder="Поиск..." />
                </form>
            </div>
        </div>
    </header>

<!--        <div id="menu"></div>-->
<!--        <div id="slideImage"></div>-->

<!--    <br />-->
<!--    <button id="connect">Нажмите</button>-->
<!--    <br /><br />-->
<!--    <br />-->
<!--    <button id="testConnect">Остатки товаров</button>-->
<!--    <br /><br />-->
<!--    <button id="testConnect1">Data Tables</button>-->
<!--    <br />-->
<!--  <button id="testRestoreOne">Apple iphone 12 pro max 512 gb gold</button>-->
<!--    <button id="testRestoreTwo">Apple iphone SE 256 gb red</button>-->
<!--    <br /><br />-->
<!--    <button id="testRestoreThree">Apple ipad Air Wi-Fi + Cellular 64 gb blue sky</button>-->
<!--    <br /><br />-->
<!--    <button id="testRestoreFour">Apple MacBook Air 13 Quad Core 15 512 gb gold</button>-->
<!--    <br /><br />-->
  <div id="table"></div><div id="imagetable"></div>
    <div id="tableone"></div><div id="imagetableone"></div>
    <div id="tabletwo"></div><div id="imagetabletwo"></div>
    <div id="tablethree"></div><div id="imagetablethree"></div>
    <div id="tablefour"></div><div id="imagetablefour"></div>
    <div id="tablefife"></div><div id="imagetablefife"></div>
    <div id="tablesix"></div><div id="imagetablesix"></div>
    <div id="ipadgold"></div><div id="imagetableipadgold"></div>
    <div id="ipadgray"></div><div id="imagetableipadgrey"></div>
    <div id="ipadwhite"></div><div id="imagetableipadwhite"></div>

    <div id="macgrey"></div><div id="imgmacgrey"></div>
    <div id="macmini"></div><div id="imgmacmini"></div>
    <div id="imac"></div><div id="imgimac"></div>

    <div id="watchblue"></div><div id="imgwatchblue"></div>
    <div id="watchred"></div><div id="imgwatchred"></div>
    <div id="watchwhite"></div><div id="imgwatchwhite"></div>
    
  <script src="/js/jquery.dataTables.min.js"></script>
  <script src="tableconversions.js"></script>
</body>
</html>

