<?php

    try {
        //$con = new PDO("mysql:host=localhost;dbname=100393", "100393", "Independencia47!");
        $con = new PDO("mysql:host=localhost;dbname=100393", "100393", "Independencia47!");
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $con->exec("SET CHARACTER SET UTF8");
        return ($con);
    }
    catch (PDOException $e) {
        die ($e->getMessage());
    } 
?>