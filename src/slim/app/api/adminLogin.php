<?php
    $app->post('/adminLoginSubmit',function($req,$response,$args){
        
        header('Access-Control-Allow-Origin: *');

        require_once ( 'db.php' );
        $data = json_decode($req->getBody());
        $username = $data->username;
        $pass = $data->password;
        
        if(isset($username) && isset($pass)){
            $sql = "SELECT * FROM admin WHERE username='$username'AND password= '$pass'";
            $query = mysqli_query($conn,$sql);
            if(mysqli_num_rows($query)>0){
                return json_encode(true);
            }
        }else{
            return json_encode(false);
        }
        return json_encode(false);
    });