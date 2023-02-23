require([
  "dojo/parser",
  "esri/map",
  'esri/dijit/Directions',
  "dojo/domReady!"
], function (parser, Map, Directions) {
  // Parse DOM nodes decorated with the data-dojo-type attribute
  parser.parse();
  var myMap = new Map('cpCenter', {
    basemap: 'satellite',
    center: [-117.19, 34.05],
    zoom: 10,
  });

  var directionsWidget= new Directions({
    map: myMap,
    routeTaskUrl: "http://utility.arcgis.com/usrsvcs/appservices/OM1GNiiACNJceMRn/rest/services/World/Route/NAServer/Route_World"

  }, 'divDirections');
  directionsWidget.startup();



});
