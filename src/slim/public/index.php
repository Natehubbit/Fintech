<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;

    require_once('../app/api/test.php');
    require_once('../app/api/orgDet.php');
    require_once('../app/api/adminLogin.php');
    require_once('../app/api/adminLogin.php');
    require_once('../app/api/fetchAdmins.php');
    require_once('../app/api/fetchNameAddress.php');
    require_once('../app/api/saveTrans.php');
    require_once('../app/api/loadPerson.php');

$app->run();