<?php
$host = 'database-1.czxa4ze6zfjv.us-east-1.rds.amazonaws.com';
$dbname = 'database-1';
$username = 'admin'; // Default XAMPP MySQL username
$password = 'Admin123';     // Default XAMPP MySQL password (empty)

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
