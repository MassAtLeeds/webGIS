<!DOCTYPE html>
<head>
	<title>Hurricane Tweets</title>
	
	<link rel="stylesheet" type="text/css" href="style.css">
	<script language="javascript" type="text/javascript" src="script.js"></script>
	
</head>

<body>

	<div class = "title">
		<h1>Unit 6 INSERT example</a></h1>
	</div>

	<?php 
		//Assign variables to values passed from HTML
		//Sanitize the text as it comes in, keeping only what is needed
		
		$pattern = "/[^A-Za-z0-9\s\.\:\-\%\+\(\)\.\&\!\@\,\'\"]/"
		$user		= sanitize('user',FILTER_SANITIZE_STRING,$pattern) 
		
		$user		= filter_var($_POST['user'], FILTER_SANITIZE_STRING);
		$password 	= filter_var($_POST['password'], FILTER_SANITIZE_STRING); 
		$text		= filter_var($_POST['textBody'], FILTER_SANITIZE_STRING);
		$lat 		= filter_var($_POST['lat'], FILTER_SANITIZE_STRING);
		$lon 		= filter_var($_POST['lon'], FILTER_SANITIZE_STRING);
		$day 		= filter_var($_POST['day'], FILTER_SANITIZE_NUMBER_INT);
		$hour 		= filter_var($_POST['hour'], FILTER_SANITIZE_NUMBER_INT);
		$min 		= filter_var($_POST['min'], FILTER_SANITIZE_NUMBER_INT);
		
		// As the filters still leave standard characters, filter non-useful.
		$pattern = "/[^A-Za-z0-9\s\.\:\-\%\+\(\)\.\&\!\@\,\'\"]/"
		$user = preg_replace($pattern,"",$user);
		$password = preg_replace($pattern,"",$password);
		$text = preg_replace($pattern,"",$text);
		$pattern = "/[^A-Za-z0-9\s\.\:\-\+\(\)\.\,\'\"]/"
		$lat = preg_replace($pattern,"",$lat);
		$lon = preg_replace($pattern,"",$lon);
		$day = preg_replace($pattern,"",$day);
		$hour = preg_replace($pattern,"",$hour);
		$min = preg_replace($pattern,"",$min);
		
		// Trim off white spaces.
		$user = trim($user);
		$password = trim($password);
		$text = trim($text);
		$lat = trim($lat);
		$lon = trim($lon);
		$day = trim($day);
		$hour = trim($hour);
		$min = trim($min);
		
		// Cut long strings.
		if (strlen($user) > 255) $user = substr($user,0,255);
		if (strlen($password) > 255) $password = substr($password,0,255);
		if (strlen($text) > 255) $text = substr($text,0,255);
		if (strlen($lat) > 255) $lat = substr($lat,0,255);
		if (strlen($lon) > 255) $lon = substr($lon,0,255);
		if (strlen($day) > 255) $day = substr($day,0,255);
		if (strlen($hour) > 255) $hour = substr($hour,0,255);
		if (strlen($min) > 255) $min = substr($min,0,255);
		
		// Finally, use the postgres escape function to replace remaining characters with safe versions.
		//http://php.net/manual/en/function.pg-escape-string.php
		$user = pg_escape_literal($user);
		$password = pg_escape_literal($password);
		$text = pg_escape_literal($text);
		$lat = pg_escape_literal($lat);
		$lon = pg_escape_literal($lon);
		$day = pg_escape_literal($day);
		$hour = pg_escape_literal($hour);
		$min = pg_escape_literal($min);
		
		//Connect to db 
		$pgsqlOptions = "host='localhost' dbname='geog5871' user= $user password= $password";
		$dbconn = pg_connect($pgsqlOptions) or die ('connection failure');
		
		//Return current maximum ID
		$getOID = pg_query($dbconn, "SELECT MAX(oid) FROM tweets") or die ('Query 1 failed: '.pg_last_error());
		$oid = pg_fetch_result($getOID, 0, 0);
		
		//Increment ID by one to create new row ID
		$oid++; 
		
		//Insert query
		$insertQuery = "INSERT INTO tweets(oid, body, latitude, longitude, day, hour, min) VALUES($oid,'$text',$lat,$lon,$day,$hour,$min)";
		
		$result = pg_query($dbconn, $insertQuery) or die ('Insert Query failed: '.pg_last_error()); 
		
		if (is_null($result))	{
			echo 'Data insert failed, please try again';
		}
		
		else {
			echo 'Data insert successful';
		}
		
		//Close db connection
		pg_close($dbconn);
		
		function sanitize($str,$filter,$pattern) {
			$sanStr = filter_var($_POST[$str], $filter);
			$sanStr = preg_replace($pattern,"",$sanStr);
			$sanStr = trim($sanStr);
			if (strlen($sanStr) > 255) $sanStr = substr($sanStr,0,255);
			$sanStr = pg_escape_literal($sanStr);
		}
	?>

</body>