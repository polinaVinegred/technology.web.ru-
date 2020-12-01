<?php

class GoodsAPI
{
    public function GetBalanceQuery()
    {
        $query =  "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id";
        return $query;
    }

    public function GetNameProductsQuery()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 2";
        return $query;
    }

    public function GetURLPictures()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 2";
        return $query;
    }

    public function GetNameProductsQueryTwo()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 3";
        return $query;
    }

    public function GetURLPicturesTwo()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 3";
        return $query;
    }

    public function GetCharacteristicQuery() {
        $query =  "select
    characteristics.name,
    goodsCharacteristics.value
from
    characteristics as characteristics
        left join goodsCharacteristics as goodsCharacteristics
        on characteristicID = characteristics.id";
        return $query;
    }

    public function GetNameProductsQueryThree()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 4";
        return $query;
    }

    public function GetURLPicturesThree()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 4";
        return $query;
    }

    public function GetNameProductsQueryFour()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 5";
        return $query;
    }

    public function GetURLPicturesFour()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 5";
        return $query;
    }

    public function GetNameWatchOne()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 8";
        return $query;
    }

    public function GetURLWatchOne()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 6";
        return $query;
    }
    /////////////////////////////////////////////////////////////////
    public function phone12white()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 9";
        return $query;
    }
    public function phone12whiteimg()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 9";
        return $query;
    }

    public function phone12black()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 10";
        return $query;
    }
    public function phone12blackimg()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 10";
        return $query;
    }

    public function phone12green()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 11";
        return $query;
    }
    public function phone12greenimg()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 11";
        return $query;
    }

    ///////////////////////////////////////////////////////////////////////
    public function ipadgold()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 12";
        return $query;
    }
    public function imgipadgold()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 12";
        return $query;
    }

    public function ipadgray()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 13";
        return $query;
    }
    public function imgipadgray()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 13";
        return $query;
    }

    public function ipadwhite()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 14";
        return $query;
    }
    public function imgipadwhite()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 14";
        return $query;
    }
/////////////////////////////////////////////////////////
    public function macgrey()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 15";
        return $query;
    }
    public function imgmacgrey()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 15";
        return $query;
    }

    public function macmini()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 16";
        return $query;
    }
    public function imgmacmini()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 16";
        return $query;
    }

    public function imac()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 17";
        return $query;
    }
    public function imgimac()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 17";
        return $query;
    }
//////////////////////////////////////
    public function watchblue()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 18";
        return $query;
    }
    public function imgwatchblue()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 18";
        return $query;
    }

    public function watchred()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 19";
        return $query;
    }
    public function imgwatchred()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 19";
        return $query;
    }

    public function watchwhite()
    {
        $query = "select
    goods.name,
    prices.price
from
    goods as goods
        left join prices as prices
        on prices.goodsid = goods.id
 where
    id = 20";
        return $query;
    }
    public function imgwatchwhite()
    {
        $query = "SELECT bigURL FROM  `pictures` WHERE  goodsidD = 20";
        return $query;
    }
////////////////////////////////////////
}

class MySQLRoutines
{
    public function DBConection() {
        $db = new mysqli('localhost', 'irsiog', 'Irisoka1', 'AppleRestore');
        if (mysqli_connect_errno()) {
            echo "Подключение невозможно: ".mysqli_connect_error();
        }
        return $db;
    }
    public function DBQuery($query) {
        $ost =  mysqli_query(MySQLRoutines::DBConection(), $query);
        return $ost;
    }
    public function DBQueryTransformation($ost)
    {
        $dbost = array();
        while ($raw_rs = mysqli_fetch_assoc($ost)) {
            $dbost[] = $raw_rs;
        }
        return $dbost;
    }
}

class JsonRoutines
{
    public function VariableEncode($var) {
        return json_encode($var);
    }

    public function JsonOutput ($query) {
        $json = JsonRoutines::VariableEncode(MySQLRoutines::DBQueryTransformation(MySQLRoutines::DBQuery($query)));
        return $json;
    }
}
class ArgRoutines
{
    public function ArgumentOutput()
    {
        echo "<pre>";
        print_r($_GET);
        echo "</pre>";
        echo "<pre>";
        print_r($_POST);
        echo "</pre>";
    }
}
