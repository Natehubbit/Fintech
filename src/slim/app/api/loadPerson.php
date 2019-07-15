<?php
    $app->get('/loadPerson/{address}',function($req,$response,$args){
        
        header('Access-Control-Allow-Origin: *');

        require_once ( 'db.php' );
        $address = $req->getAttribute('address');
        
        
        $sql = "SELECT * FROM student_info WHERE eth_address='$address'";
        $res = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_assoc($res)){
            $data[]=$row;
        }

        
        return json_encode($data);
        
    });