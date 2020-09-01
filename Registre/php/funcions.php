
<?php
    //Connexio
    require_once "conexio.php";
    session_start();
    
    $districte=1;
    
    $sql="SELECT * from barris WHERE id_districte=$districte ORDER BY name ASC";
    $result = $db->query($consulta);
    if (!$result) {
        print "Error en la consulta.\n";
    }
    else {
        foreach ($result as $valor) {
            echo '<option value="'.$valor["id"].'">'.$valor["name"].'</option>';
        }
    }

    $telf   = $_POST["validationTelf"];
    //$dni    = $_POST["DNI"];

    $consulta1 = "SELECT * from usuari WHERE telf=?";
    $statement = $con->prepare($consulta1);
    $statement->execute(array($telf));
    $x=0;
    while($fila=$statement->fetch(PDO::FETCH_ASSOC)){
        $x=1;
        echo "Aquest telefon ja existeix <br />";                
        ?><p><a href="..\form_registreUsuaris.php">Tornar a la pàgina de registre</a></p> <?php                
    } 
    if($x==0){
        $email        = $_POST["validationEmail"];
        $consulta2  = "SELECT * from usuari WHERE email=?";
    }
?>