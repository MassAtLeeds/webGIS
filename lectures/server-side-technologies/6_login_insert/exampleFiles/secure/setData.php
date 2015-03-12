<!DOCTYPE html>
<head>
	<title>Hurricane Tweets</title>
	
	<link rel="stylesheet" type="text/css" href="style.css">
	
</head>

<body>

	<div class = "title">
		<h1>Unit 9 INSERT example</a></h1>
	</div>

	<?php 
	
		array_filter($_POST, 'trim_value');
		
		$pattern = "/[^A-Za-z0-9\s\.\:\-\+\!\@\,\'\"]/";
		$user		= sanitize('user',FILTER_SANITIZE_SPECIAL_CHARS,$pattern); 
		$password 	= sanitize('password',FILTER_SANITIZE_SPECIAL_CHARS,$pattern); 
		$text		= sanitize('textBody',FILTER_SANITIZE_SPECIAL_CHARS,$pattern);
		$pattern = "/[^A-Za-z0-9\s\.\:\-\+\.\°\,\'\"]/";
		$lat 		= sanitize('lat',FILTER_SANITIZE_SPECIAL_CHARS,$pattern);
		$lon 		= sanitize('lon',FILTER_SANITIZE_SPECIAL_CHARS,$pattern);
		$day 		= sanitize('day',FILTER_SANITIZE_NUMBER_INT,$pattern);
		$hour 		= sanitize('hour',FILTER_SANITIZE_NUMBER_INT,$pattern);
		$min 		= sanitize('min',FILTER_SANITIZE_NUMBER_INT,$pattern);
		
		
		//Connect to db 
		$pgsqlOptions = "host='localhost' dbname='geog5871' user= $user password= $password";
		$dbconn = pg_connect($pgsqlOptions) or die ('connection failure');
		
		//Return current maximum ID
		$getOID = pg_query($dbconn, "SELECT MAX(oid) FROM tweets") or die ('Query 1 failed: '.pg_last_error());
		$oid = pg_fetch_result($getOID, 0, 0);
		
		//Increment ID by one to create new row ID
		$oid++; 
		
		$dbconn = pg_connect($pgsqlOptions);
		$insertQuery = pg_prepare($dbconn, "my_query", "INSERT INTO tweets(oid, body, latitude, longitude, day, hour, min) VALUES($1,$2,$3,$4,$5,$6,$7)");
		$result = pg_execute($dbconn, "my_query", array($oid,$text,$lat,$lon,$day,$hour,$min))  or die ('Insert Query failed: '.pg_last_error()); 

		
		if (is_null($result))	{
			echo 'Data insert failed, please try again';
		}
		
		else {
			echo 'Data insert successful';
		}
		
		//Close db connection
		pg_close($dbconn);
		
		
		function trim_value(&$value){
		   $value = trim($value);
		   $pattern = "/[\(\)\[\]\{\}]/";
		   $value = preg_replace($pattern," - ",$value);
		}

		

		function sanitize($str,$filter,$pattern) {
		   $sanStr = preg_replace($pattern,"",$sanStr);
		   $sanStr = filter_var($_POST[$str], $filter);
		   if (strlen($sanStr) > 255) $sanStr = substr($sanStr,0,255);
		   return $sanStr;
		} 
	?>

</body>