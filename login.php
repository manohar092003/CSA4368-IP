<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $userName = $_POST['userName'];
    $userPassword =$_POST['userPassword'];
    $userConfirmPassword = $_POST['userConfirmPassword'];
  

    $servername = "localhost";
    $uname = "root";
    $pass= ""; 
   $database = "school_12";

 
  $connection = mysqli_connect($servername, $uname, $pass, $database);
  
  

 
 

  if (!$connection) {
      die("Sorry, we failed to connect: " . mysqli_connect_error());
  } else {
      echo "Connection was successful";
  }

 
  $sql = "INSERT INTO child_12 (userName, userpassword, userConfirmPassword) VALUES ('$userName', '$userPassword', '$userConfirmPassword')";
  
  $result = mysqli_query($connection, $sql);

  if ($result) {
    echo "  Data inserted successfully";

  } else {
    echo "Data not inserted successfully";
  }
}
?>