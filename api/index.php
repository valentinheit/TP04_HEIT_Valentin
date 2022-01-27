<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';
$app = AppFactory::create();

$app->get('/hello/{name}',
    function (Request $resquest, Response $response,$args) {
        $res = ["nom" => $args['name']];
        return $response->getBody()->write(json_encode($res));});
    $app->run();
?>