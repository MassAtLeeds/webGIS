//Function to check if field is empty
var isEmpty    = function(x) { return x === ""; }

//Function to check if field is number
var isNumber   = function(x) { return ! isNaN(x-0); } 

//If field is invalid it is passed here
var invalid    = function(x) { x.style.backgroundColor = '#FFFF7E'; error = true; }

//If field is valid, passed here, changes field back to white in case of form resubmit
var valid      = function(x) { x.style.backgroundColor = "White"; }

function validate()	{

	error 	 	 = false; 
	var allboxes = document.getElementsByClassName('boxes');
	var username = document.getElementById('user'); 
	var password = document.getElementById('password');
	
	var body 	 = document.getElementById('body');
	var lat	 	 = document.getElementById('lat');
	var lon	 	 = document.getElementById('lon');
	var day		 = document.getElementById('day');
	var hour	 = document.getElementById('hour');
	var minute	 = document.getElementById('min');

	//Clear yellow highlighting in case form is resubmitted 
	for (var i=0;i<allboxes.length;i++) {
		valid(allboxes[i]); 
	}
	
	//Loop through all fields to check if empty 
	for (var i=0;i<allboxes.length;i++) { 
		if	(isEmpty(allboxes[i].value))	{
			invalid(allboxes[i]); 
		}
	} 
	
	//Validate latitude field 
	if (!isNumber(lat.value) || isEmpty(lat.value))	{
		invalid(lat);
	}
	
	//Validate longitude field
	if (!isNumber(lon.value) || isEmpty(lon.value))	{
		invalid(lon);
	}
	
	//Validate Day field
	if (!isNumber(day.value) || isEmpty(day.value))	{
		invalid(day);
	}
	
	//Validate Hour field
	if (!isNumber(hour.value) || isEmpty(hour.value))	{
		invalid(hour);
	}
	
	//Validate Minute field
	if (!isNumber(minute.value) || isEmpty(minute.value))	{
		invalid(minute);
	}
	
	//If error, return false and alert user
	if (error) { 
		alert("Please check the form for highlighted errors and resubmit");
		return false; 
	} 
	
	//Submit form if there are no errors. 
	else 	{
		return true; 
	} 
}