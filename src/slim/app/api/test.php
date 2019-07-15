<?php
    $app->get('/test',function(){
        require_once ( 'db.php' );
        $sql = 'SELECT * FROM student_info';
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
    