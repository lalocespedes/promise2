<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 10:18 AM
 */

return [
    'app' 	=> [
        'url'	=> 'http://localhost:9000',
        'hash'	=> [
            'algo'	=> PASSWORD_BCRYPT,
            'cost'	=> 10
        ],
        'debug'	=> true
    ],
    'db' 	=> [
        'driver' 	=> 'mysql',
        'host'		=> 'localhost',
        'name'		=> 'almacen',
        'username'	=> 'root',
        'password'	=> 'root',
        'charset'	=> 'utf8',
        'collation'	=> 'utf8_unicode_ci',
        'prefix'	=>	''
    ],
    'auth'	=> [
        'session'	=> 'user_id',
        'remember'	=> 'user_r'
    ],
    'mail'	=> [
        'smtp_auth'		=> true,
        'smtp_secure'	=> 'tls',
        'host' 			=> 'smtp.gmail.com',
        'username'		=> 'lalocespedes@gmail.com',
        'password'		=> '',
        'port'			=> 587,
        'html'			=> true
    ],
    'twig'	=> [
        'debug'	=> true
    ],
    'csrf'	=> [
        'key'	=> 'csrf_token'
    ]
];