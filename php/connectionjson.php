<?php
 require_once 'GoodsAPI.php';
//подключение к БД

if (isset($_GET['json'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetBalanceQuery());
    die();
}
 if (isset($_GET['phoneone'])) {
        echo JsonRoutines::JsonOutput(GoodsAPI::GetNameProductsQuery());
        die();
    }
    if (isset($_GET['imgone'])) {
        echo JsonRoutines::JsonOutput(GoodsAPI::GetURLPictures());
        die();
    }


if (isset($_GET['phonetwo'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetNameProductsQueryTwo());
    die();
}


if (isset($_GET['imgtwo'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetURLPicturesTwo());
    die();
}

if (isset($_GET['phonethree'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetNameProductsQueryThree());
    die();
}


if (isset($_GET['imgthree'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetURLPicturesThree());
    die();
}

if (isset($_GET['phonefour'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetNameProductsQueryFour());
    die();
}


if (isset($_GET['imgfour'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetURLPicturesFour());
    die();
}

if (isset($_GET['imgwatch'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetURLWatchOne());
    die();
}

if (isset($_GET['watchgold'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetNameWatchOne());
    die();
}


/////////////////////////////////////////////////////////////////////////////

if (isset($_GET['phone12white'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12white());
    die();
}
if (isset($_GET['img12white'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12whiteimg());
    die();
}

if (isset($_GET['phone12black'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12black());
    die();
}
if (isset($_GET['img12black'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12blackimg());
    die();
}

if (isset($_GET['phone12green'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12green());
    die();
}
if (isset($_GET['img12green'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::phone12greenimg());
    die();
}
////////////////////////////////////////////////////
if (isset($_GET['ipadgold'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::ipadgold());
    die();
}
if (isset($_GET['imgipadgold'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgipadgold());
    die();
}

if (isset($_GET['ipadgray'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::ipadgray());
    die();
}
if (isset($_GET['imgipadgray'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgipadgray());
    die();
}

if (isset($_GET['ipadwhite'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::ipadwhite());
    die();
}
if (isset($_GET['imgipadwhite'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgipadwhite());
    die();
}
////////////////////////////////////////////////
if (isset($_GET['macgrey'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::macgrey());
    die();
}
if (isset($_GET['imgmacgrey'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgmacgrey());
    die();
}

if (isset($_GET['macmini'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::macmini());
    die();
}
if (isset($_GET['imgmacmini'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgmacmini());
    die();
}

if (isset($_GET['imac'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imac());
    die();
}
if (isset($_GET['imgimac'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgimac());
    die();
}

/////////////////////////////////////////////////////////////////
if (isset($_GET['watchblue'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::watchblue());
    die();
}
if (isset($_GET['imgwatchblue'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgwatchblue());
    die();
}

if (isset($_GET['watchred'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::watchred());
    die();
}
if (isset($_GET['imgwatchred'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgwatchred());
    die();
}

if (isset($_GET['watchwhite'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::watchwhite());
    die();
}
if (isset($_GET['imgwatchwhite'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::imgwatchwhite());
    die();
}

