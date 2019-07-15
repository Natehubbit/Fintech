<?php

    $host = 'localhost';
    $pass = '';
    $user = 'root';
    $db = 'srcledger';
    $port = '3001';

    $conn = mysqli_connect($host,$user,$pass,$db);

    if(!$conn){
        die('connection failed'.mysqli_connect_errno());
    }