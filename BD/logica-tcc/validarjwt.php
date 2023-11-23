<?php
require 'lib2/vendor/autoload.php';
use Firebase\JWT\JWT;

if (class_exists('Firebase\JWT\JWT')) {
    echo "O pacote 'firebase/php-jwt' está instalado corretamente.";
} else {
    echo "O pacote 'firebase/php-jwt' não está instalado corretamente.";
}