
<?php
    //Connexio
    require_once "conexio.php";
    session_start();
    
    //$districte=1;
    //mateixa variable que AJAX
    $districte = $_POST["idDistricte"];
    
    $sql="SELECT * from barris WHERE id_districte=$districte ORDER BY name ASC";
    $result = $con->query($sql);
    if (!$result) {
        print "Error en la consulta.\n";
    }
    else {
        foreach ($result as $valor) {
            echo '<option value="'.$valor["id"].'">'.$valor["name"].'</option>';
        }
    }
?>