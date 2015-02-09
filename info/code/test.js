// Begin add polyline code
      var polyLineCoordinates = [
          new google.maps.LatLng(37.4419, -122.1419),
          new google.maps.LatLng(45.65654,-71),
          new google.maps.LatLng(28.65654,-100)
      ];
      var polyLine = new google.maps.Polyline({
        path: polyLineCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      polyLine.setMap(map);
    // End of add polyline code
    
    
    
    
    