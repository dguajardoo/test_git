<?php

    $db = new PDO('pgsql:host=localhost user=dguaj dbname=desis');
    $statement = $db->prepare("SELECT * FROM comunas;");
    $statement->execute();

    //var_dump($statement->fetch());

    
    $array = array();
    while ($row = $statement->fetch()) {
        $pregunta = new stdClass();
        $pregunta->comuna_id = $row["comuna_id"];
        $pregunta->comuna_nombre = $row["comuna_nombre"];

        array_push($array, $pregunta);
    }

    echo json_encode($array);