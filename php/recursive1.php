<?php

function fib ($n) {
    if ($n < 2) {
        return [0];   
    }
    if ($n < 3) {
        return [0, 1];
    }

    $a = fib($n - 1);
    array_push($a, $a[$n - 2] + $a[$n - 3]);
    return $a;
};
$sequence = fib(15);

var_dump($sequence);