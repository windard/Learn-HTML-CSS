<?php 

if(isset($_GET['name'])){
	echo "hello:".$_GET['name'];
}else{
	echo "Args Error";
}

 ?>