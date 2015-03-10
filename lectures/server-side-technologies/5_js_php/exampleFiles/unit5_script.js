
function fetchData()	{
	
	//Define array to hold results returned from server
	tweetData = new Array();
	
	//AJAX request to server; accepts a URL to which the request is sent 
	//and a callback function to execute if the request is successful. 
	$.getJSON("unit5_fetchData.php", function(results)	{ 
		
		//Populate tweetData with results
		for (var i = 0; i < results.length; i++ )	{
			
			tweetData.push ({
				id: results[i].id, 
				body: results[i].body, 
				lat: results[i].lat, 
				lon: results[i].lon
			}); 
		}
		
		writeTweets(); 
	});
	
	function writeTweets()	{	
	
		for (var i = 0; i< tweetData.length; i++)	{ 
			document.getElementById('textWrap').innerHTML += 
			"id = " + tweetData[i].id + ", text = " + tweetData[i].body + 
			", coordinates = " + tweetData[i].lat + ", " + tweetData[i].lon + "<br />"; 			
		}
	}
}

function clearData()	{
	document.getElementById('textWrap').innerHTML = ''; 
}
		
	
	