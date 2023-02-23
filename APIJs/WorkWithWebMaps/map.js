var mapMain;
var legendLayers;
var webmapId = "7d987ba67f4640f0869acb82ba064228";

require([
  "dojo/parser",
  "esri/arcgis/utils",
  "dojo/dom",
  "esri/dijit/Legend",
  "esri/dijit/BasemapGallery",
  "dojo/domReady!",
], function (parser, arcgisUtils, dom, Legend, BasemapGallery) {
  parser.parse();

  var webmap = arcgisUtils.createMap(webmapId, "cpCenter").then(function(response){
    console.log('res',response);
    dom.byId("title").innerHTML = response.itemInfo.item.title;
    var myMap = response.map;

    var legendLayers = arcgisUtils.getLegendLayers(response);
    var legendDijit = new Legend({
      map: myMap,
      // layerInfos: legendLayers
    }, "divLegend");
    legendDijit.startup();

    var basemapGallery = new BasemapGallery({
      showArcGISBasemaps: true,
      map: myMap
    }, "basemapGallery");
    basemapGallery.startup();
  });
});
