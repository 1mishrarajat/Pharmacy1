<?php
header("Content-Type: application/json");
include 'db.php';
include 'cors.php';
require_once 'vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$secret_key = "your_secret_key";

$headers = getallheaders();
if (!isset($headers['Authorization'])) {
    echo json_encode(['message' => 'Unauthorized access. No authorization header provided.']);
    http_response_code(401);
   // header("Location: login.php");
    exit;
}

$authHeader = $headers['Authorization'];
if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    $jwt = $matches[1];
    try {
      
        $decoded = JWT::decode($jwt, new Key($secret_key, 'HS256'));
        $user_id = $decoded->user_id;
        $role = $decoded->role;

        if ($role === 'admin') {
      
            $stmt = $pdo->prepare("SELECT * FROM pharmacy");
            $stmt->execute();
            $pharmacy_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($pharmacy_data);
            http_response_code(200);
        } elseif ($role === 'user') {
      
            $stmt = $pdo->prepare("SELECT * FROM subscriptions WHERE user_id = :user_id AND is_subscribed = 1");
            $stmt->execute(['user_id' => $user_id]);
            $subscription = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($subscription) {
                $stmt = $pdo->prepare("SELECT * FROM pharmacy");
                $stmt->execute();
                $pharmacy_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($pharmacy_data);
                http_response_code(200);
            } else {
                echo json_encode(['message' => 'Please subscribe']);
                http_response_code(403);
            }
        } else {
           
            echo json_encode(['message' => 'Invalid role']);
            http_response_code(403);
        }
    } catch (Exception $e) {
        echo json_encode(['message' => 'Invalid token', 'error' => $e->getMessage()]);
        http_response_code(401);
        header("Location: login.php"); 
        exit;
    }
} else {
    echo json_encode(['message' => 'Authorization token missing or incorrect format']);
    http_response_code(400);
    header("Location: login.php"); 
    exit;
}
?>



