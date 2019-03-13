<?php
    $app->get('/orgDet',function(){
        require_once ( 'db.php' );
        $sql = 'SELECT first_name, last_name, eth_address, contact FROM student_info WHERE id=1';
        $res = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_assoc($res)){
            $data[] = $row;
        }

        if(isset($data)){
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    });