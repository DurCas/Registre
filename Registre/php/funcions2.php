
<?php
    //Connexio
    require_once "conexio.php";
    session_start();
    
    $id     = $_POST["id"];
    $nom    = $_POST["nom"];
    $cognom = $_POST["cognoms"];
    $telf   = $_POST["telf"];
    $email  = $_POST["email"];

    $query  = "INSERT INTO usuari (id, nom, cognom, email, telefon) VALUES('$id', '$nom', '$cognom', '$email', '$telf')";
    echo $query;
    $con->query($query);
    //$res=$con->query($query);
    ?>
