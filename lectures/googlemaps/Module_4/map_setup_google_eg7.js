var map; // The map object

  var myCentreLat = 53.8;
  var myCentreLng = -1.6;

  var initialZoom = 10;

  
function infoCallback(infowindow, marker) { return function() { infowindow.open(map, marker); }; }


  function initialize() {
    var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
    var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

    // First marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(53.7996388,-1.5491221), 
      map: map, 
      title:"Leeds"
    });

    // First infowindow
    var infowindow = new google.maps.InfoWindow({
      content: "<div class=infowindow><h1>Leeds</h1><p>Population: 715,402</p></div>"
    });
    
    google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));

    // Second marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(53.7938530,-1.7524422), 
      map: map, 
      title:"Bradford"
    });

    // Second infowindow
    var infowindow = new google.maps.InfoWindow({
      content: "<div class=infowindow><h1>Bradford</h1><p>Population: 467,665</p></div>"
    });
    
    google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));

    
}