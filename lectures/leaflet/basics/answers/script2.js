
function fetchData()	{
	
	 var map = L.map('map').setView([51.505, -0.09], 13);
 
 L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
	
	//Define array to hold results returned from server
	tweetData = new Array();
	
	//AJAX request to server; accepts a URL to which the request is sent 
	//and a callback function to execute if the request is successful. 
	$.getJSON("fetch_tweets.php", function(results)	{ 
		
		//Populate tweetData with results
		for (var i = 0; i < results.length; i++ )	{
			
			tweetData.push ({
				id: results[i].id, 
				body: results[i].body, 
				lat: results[i].lat, 
				lon: results[i].lon
			}); 
		}
		
		//plotTweets(); 
	});
	
	function plotTweets()	{	
		//Loop through tweetData to create marker at each location 
		for (var i = 0; i< tweetData.length; i++)	{ 
			var markerLocation = new L.LatLng(tweetData[i].lat, tweetData[i].lon);
			var marker = new L.Marker(markerLocation);
				
			map.addLayer(marker);
			marker.bindPopup(tweetData[i].body);
		}
	}
}