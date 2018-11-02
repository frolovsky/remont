<?php

$adminmail = "apf7517@yandex.ru";
$title 	   = "Заказ на ремонт";

$name = trim($_POST["rname"]);
$phone = trim($_POST["rphone"]);
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$message = "Имя: $name \nТелефон: $phone";

mail($adminmail, $title, $message);