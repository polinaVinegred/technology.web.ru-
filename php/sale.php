<?php require_once 'connectionjson.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>скидки и предложения</title>
    <script  src="/js/jquery.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/js/jquery.dataTables.min.css" />
    <link rel="stylesheet"  href="salestyle.css" />
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
<div class="container-body">
    <h1 class="nameh1">Скидки и выгондыне предложения!</h1>
    <div id="table"></div><div id="imagetable"></div>
</div>
<script src="inputsale.js"></script>
<script src="/js/jquery.dataTables.min.js"></script>
</body>
</html>