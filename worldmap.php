<!--
///////////////////////////////////////
// HTML5 Canvas Worldmap, original code by John Combe (http://joncom.be/).
//
// This file should be distributed with 
// a LICENSE file detailing under which 
// clauses it is shared.
//
// http://github.com/gardaud/worldmap-canvas
///////////////////////////////////////
--> 
 
<!DOCTYPE html> 
<html>

<head>
	<title>World Map</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" /> 
	<link rel="stylesheet" href="style.css" type="text/css"></link> 

	<!-- We use JQuery -->
  	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script> 

	<!-- Our scripts -->
  	<script type="text/javascript" src="worldmap.js"></script>
	<script type="text/javascript" src="worldmap-control.js"></script>
</head>

<body onload="Init();">
	<canvas id="worldmap" width="736" height="300"></canvas>
	<?php require("worldmap-control.html"); ?>
</body>
</html>

