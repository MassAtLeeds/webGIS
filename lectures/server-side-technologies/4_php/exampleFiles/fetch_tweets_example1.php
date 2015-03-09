<?php 
	
	//Connect to db 
	$pgsqlOptions = "host='XXX' dbname='XXX' user='XXX' password='XXX'";
	$dbconn = pg_connect($pgsqlOptions) or die ('connection failure');
	
	//Define sql query
	$query = "SELECT oid, body, latitude, longitude FROM tweets";

	//Execute query
	$result = pg_query($dbconn, $query) or die ('Query failed: '.pg_last_error());
	
	//Loop through query results 
	while ($row = pg_fetch_array($result, null, PGSQL_ASSOC))	{
		//Print results
		echo json_encode($row);
	}

	//Close db connection
	pg_close($dbconn);
?>
