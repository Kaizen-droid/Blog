<?php

function conexion () {
    $server = "localhost";
    $user = "root";
    $pass = "1806";
    $db = "blog";

    try{
        $c = new PDO("mysql:host={$server};dbname={$db}", $user, $pass);
        $c->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $c;
    }catch(PDOException $e){
        exit($e->getMessage());
    }
}
?>