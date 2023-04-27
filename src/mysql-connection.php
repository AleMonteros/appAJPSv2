<?php
$mysqli = new mysqli($_GET['servidor'], $_GET['usuario'], $_GET['password'], $_GET['basededatos']);

if($mysqli -> connect_errno){
    echo "Error de conexion : " . $mysqli->connect_errno;
    exit();
}

echo "Conexion Exitosa";