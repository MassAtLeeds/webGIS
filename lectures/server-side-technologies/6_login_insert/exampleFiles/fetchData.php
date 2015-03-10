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
		
		$pattern = "/[^A-Za-z0-9\s\.\:\-\%\+\(\)\.\&\!\@\,\'\"]/"
		$user		= sanitize('user',FILTER_SANITIZE_STRING,$pattern) 
		$password 	= sanitize('password',FILTER_SANITIZE_STRING,$pattern) 
		$text		= sanitize('text',FILTER_SANITIZE_STRING,$pattern)
		$pattern = "/[^A-Za-z0-9\s\.\:\-\+\(\)\.\,\'\"]/"
		$lat 		= sanitize('lat',FILTER_SANITIZE_STRING,$pattern)
		$lon 		= sanitize('lon',FILTER_SANITIZE_STRING,$pattern)
		$day 		= sanitize('day',FILTER_SANITIZE_NUMBER_INT,$pattern)
		$hour 		= sanitize('hour',FILTER_SANITIZE_NUMBER_INT,$pattern)
		$min 		= sanitize('min',FILTER_SANITIZE_NUMBER_INT,$pattern)
		
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
			// Sanitize the text as it comes in, keeping only what is needed 
			$sanStr = filter_var($_POST[$str], $filter);
			// As the filters still leave standard characters, filter non-useful.
			$sanStr = preg_replace($pattern,"",$sanStr);
			// Trim off white spaces.
			$sanStr = trim($sanStr);
			// Cut long strings.
			if (strlen($sanStr) > 255) $sanStr = substr($sanStr,0,255);
			// Finally, use the postgres escape function to replace remaining characters with safe versions.
			//http://php.net/manual/en/function.pg-escape-string.php
			$sanStr = pg_escape_literal($sanStr);
			return $sanStr;
		}
	?>

</body>