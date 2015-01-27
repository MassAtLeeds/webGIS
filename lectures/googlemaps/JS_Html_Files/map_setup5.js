var map; // The map object

  var myCentreLat = 53.807767;
  var myCentreLng = -1.557428;

  var initialZoom = 12;

  function initialize() {
    var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
    var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"Hello World!",
	  icon: 'exclamation.png'
    });
    
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
