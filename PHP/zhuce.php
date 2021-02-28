
<?php
//  如果前端是以get请求的方式传递数据过来 那么久使用$_GET['参数名字']
$username = $_GET['username']; 
$password = $_GET['password'];
// 链接数据库
$con = mysqli_connect('localhost','root','123456','text');

// 设置对应的SQL语句
// // 整体SQL语句用双引号引起来，字段 和 表明用反引号引起来，字符串和变量用单引号，数字直接写

$sql = "SELECT * FROM `guetlogin`  WHERE `username` = '$username' AND `password` = '$password'";


// 执行SQL语句
$res = mysqli_query($con,$sql);

if (!$res) {
   die('数据库连接错误: ' . mysqli_error());
 }
 $row = mysqli_fetch_assoc($res);



$arr = array();
$row = mysqli_fetch_assoc($res);
// print_r($arr);
if (!$row) {
   $inset = "INSERT INTO `may`(`username`,`password`) VALUES ('$user','$pass')";
   $inset_res =  mysqli_query ($con,$inset);
   header('location:../html/denglu.html');
}else {
   print_r('用户名已经存在');
}
?>




