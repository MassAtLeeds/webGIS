<!DOCTYPE html>
<head>
	<title>Hurricane Tweets</title>	
</head>

<body>

	<div class = "title">
		<h1>Unit 9 INSERT example</a></h1>
	</div>

	<?php 
		//Assign variables to values passed from HTML
		$user		= $_POST['user']; 
		$password 	= $_POST['password']; 
		
		$text		= $_POST['textBody']; 
		$lat 		= $_POST['lat'];
		$lon 		= $_POST['lon'];
		$day 		= $_POST['day'];
		$hour 		= $_POST['hour'];
		$min 		= $_POST['min'];
		
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
	?>

</body>