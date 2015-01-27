var map; // The map object

  var myCentreLat = 53.807767;
  var myCentreLng = -1.557428;

  var initialZoom = 12;

  //This is the function that is called when you click on the marker (a box with text in appears)
  function infoCallback(infowindow, marker) {
 return function() {
  infowindow.open(map, marker);
 };
}

//This generates the random colours of the markers. The array randomly assigns the hex colour.   
  function genHex(){
 colors = new Array(16)
 colors[0]="0"
 colors[1]="1"
 colors[2]="2"
 colors[3]="3"
 colors[4]="4"
 colors[5]="5"
 colors[6]="6"
 colors[7]="7"
 colors[8]="8"
 colors[9]="9"
 colors[10]="a"
 colors[11]="b"
 colors[12]="c"
 colors[13]="d"
 colors[14]="e"
 colors[15]="f"

 //Here's where the randomisation bit occurs, the array cycles through each colour.
 digit = new Array(5)
 color=""
 for (i=0;i<6;i++){
  digit[i]=colors[Math.round(Math.random()*16)]
 color = color+digit[i]
 }

 return color;
}

//The new function that handles the marker attributes.  The function is called below.
function addMarker(myPos,myTitle,myInfo) {

  myColour=genHex();
  myLetter=myTitle.substring(0,1);
  var marker = new google.maps.Marker({
    position: myPos, 
    map: map, 
    title: myTitle,
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+myLetter+'|'+myColour+'|000000'
  });
  var infowindow = new google.maps.InfoWindow({
    content: myInfo
  });
  google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}

  
  function initialize() {
    var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
    var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
		//Call the new addMarker function
		addMarker(latlng,"Where is this?","The University of Leeds");

		//This is all now taken care of in the addMarker() function. 
    //var marker = new google.maps.Marker({
      //position: latlng, 
      //map: map, 
      //title:"Hello World!",
	  //icon: 'exclamation.png'
    //});
    
    /*
     * We can add another marker in a similar manner
     * We can create the new LatLng object as we need it in the Marker() properties
     */

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(53.90,-1.55), 
      map: map, 
      title:"Otley"
    });   
  }
