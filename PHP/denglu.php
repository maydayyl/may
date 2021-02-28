
<?php
    $username = $_POST['username']; 
    $password = $_POST['password'];

$con = mysqli_connect('localhost','root','123456','text');
    $sql = "SELECT * FROM `guetlogin` WHERE `username` = '$username' AND `password` = '$password'";

  $res = mysqli_query($con,$sql);

  if (!$res) {
    die('error for mysql: ' . mysqli_error());
  }

  
    $arr =  array();
    $row = mysqli_fetch_assoc($res);

    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    if($arr){
        print_r('登录成功');
        header('location:../html/index.html');
    }else{
        print_r('用户名或者密码错误');
    }

?>







