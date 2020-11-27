<?php

require_once 'GoodsAPI.php';
if (isset($_GET['iphone'])) {
    echo JsonRoutines::JsonOutput(GoodsAPI::GetCharacteristicQuery());
    die();
};

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
