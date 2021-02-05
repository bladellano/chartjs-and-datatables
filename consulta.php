<?php

function numberRand()
{
    return rand(1, 25);
}

$result['data'] = [

    ["date" => "02/10/2020", "value" => numberRand()],
    ["date" => "12/10/2020", "value" => numberRand()],
    ["date" => "23/10/2020", "value" => numberRand()],
    ["date" => "23/10/2020", "value" => numberRand()],
    ["date" => "02/10/2020", "value" => numberRand()],
    ["date" => "11/10/2020", "value" => numberRand()],
    ["date" => "02/10/2020", "value" => numberRand()],
    ["date" => "02/10/2020", "value" =>  numberRand()],
    ["date" => "02/10/2020", "value" =>  numberRand()],
];

$result['label'] = "Softswitch";

echo json_encode($result);
