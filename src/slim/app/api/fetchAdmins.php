<?php
    $app->get('/fetchAdmins',function($req,$response,$args){
        
        header('Access-Control-Allow-Origin: *');
        require_once('db.php');
        $sql = "SELECT * FROM admin";
        $query = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
        }
        return json_encode($data);
    });