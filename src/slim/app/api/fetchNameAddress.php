<?php
    $app->get('/fetchAddress',function($req,$response,$args){
        
        header('Access-Control-Allow-Origin: *');

        require_once ( 'db.php' );
        $data = json_decode($req->getBody());
        $name = $data->name;
        
        if(isset($name)){
            $sql = "SELECT CONCAT(first_name,' ',last_name) FROM student_info";
            $query = mysqli_query($conn,$sql);
            

            // if(mysqli_num_rows($query)>0){
            while($row = mysqli_fetch_assoc($query))
                return json_encode($row['name']);
            // }
        }else{
            return json_encode(false);
        }
        return json_encode(true);
    });