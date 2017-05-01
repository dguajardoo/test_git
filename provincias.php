<?php

    $db = new PDO('pgsql:host=localhost user=dguaj dbname=desis');
    $statement = $db->prepare("SELECT * FROM provincias;");
    $statement->execute();

    //var_dump($statement->fetch());

    
    $array = array();
    while ($row = $statement->fetch()) {
        $pregunta = new stdClass();
        $pregunta->provincia_id = $row["provincia_id"];
        $pregunta->provincia_nombre = $row["provincia_nombre"];

        array_push($array, $pregunta);
    }

    echo json_encode($array);