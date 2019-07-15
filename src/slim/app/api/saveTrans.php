<?php
    $app->post('/saveTransaction',function($req,$response,$args){
        
        header('Access-Control-Allow-Origin: *');

        require_once ( 'db.php' );
        $data = json_decode($req->getBody());
        $to = $data->to;
        $txHash = $data->txHash;
        
        if(isset($to) && isset($txHash)){
            $sql = "INSERT INTO transactionInfo (txHash,_to) VALUES ('$txHash','$to') ";
            $res = mysqli_query($conn,$sql);
            return json_encode(true);
        }else{
            return json_encode(false);
        }
        
    });