/*
 * The starting position and initial zoom factor
 *
 * These could be determined using the supplied data...
 */

var centreLat = 51.6;
var centreLong = -0.02;
var initialZoom = 11;

// Define the map object
var map;

/* generate random colours
 */

function genHex(){
  colors = new Array(15);
  colors[0]="0";
  colors[1]="1";
  colors[2]="2";
  colors[3]="3";
  colors[4]="4";
  colors[5]="5";
  colors[6]="6";
  colors[7]="7";
  colors[8]="8";
  colors[9]="9";
  colors[10]="a";
  colors[11]="b";
  colors[12]="c";
  colors[13]="d";
  colors[14]="e";
  colors[15]="f";

  digit = new Array(5);
  color="";
  for (i=0;i<6;i++){
    digit[i]=colors[Math.round(Math.random()*15)];
    color = color+digit[i];
  }

  return color;
}




function init() {


  function infoCallback(infowindow, marker) {
    return function() {
      infowindow.open(map, marker);
    }; 
  }


  var latlng = new google.maps.LatLng(centreLat, centreLong);
  var myOptions = {
    zoom: initialZoom,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

  var schools = '';

  for(id in markers) {

    var contentString = '<div class="iw">'+
      '<h1 class="iw_h1">'+ markers[id].title+'</h1>'+
      '<ul>'+
      '<li>www: '+'<a href="' + markers[id].url+ '">'+ markers[id].title +'</a>'+
      '</ul>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({content: contentString});

    myColour=genHex();

    myLatlng=new google.maps.LatLng(markers[id].latitude,markers[id].longitude);
    var marker = new google.maps.Marker({
      position: myLatlng, 
      map: map, 
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+id+'|'+myColour+'|000000',
title: markers[id].title
    }); 

    schools = schools + '<li>' + markers[id].title;

    google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));

    // Add a Circle overlay to the map.
    var circle = new google.maps.Circle({
          map: map,
          fillColor: '#'+myColour,
          fillOpacity: 0.2,
          strokeWeight: 1,
          radius: markers[id].radius
        });

   circle.bindTo('center', marker, 'position');
 }

 document.getElementById('school_list').innerHTML = schools;

}