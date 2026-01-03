<?php

const VERSION = "0.0.1";

$path = "./package.json";
$s = file_get_contents($path);
$decode = json_decode($s, true);
$decode["version"] = VERSION . "+" . date("YmdHis");
$encode = json_encode($decode, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($path, $encode . "\n");

system("git add . && git commit -m " . $decode["version"] . " && git push");
