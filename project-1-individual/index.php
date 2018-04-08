<?php 			
$title = "Index Page";
$date = "Sept 21st, 2017";
$filename = "index.php";
$banner = "Group 18 Dating Site";
$description = "This file acts as the home page for my WEBD2201 website";
?>

<?php include "header.php"; ?>

<div style="overflow:auto">
  <div class="menu">
	<a href="#">Link 1</a>
	<a href="#">Link 2</a>
	<a href="#">Link 3</a>
	<a href="#">Link 4</a>
  </div>

  <div class="main">
	<h2>Lorum Ipsum</h2>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </div>

  <div class="right">
	<h2>About</h2>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  </div>
</div>

<?php include "footer.php"; ?>