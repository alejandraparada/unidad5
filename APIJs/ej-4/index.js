require(
    ["esri/arcgis/utils",
    "dojo/domReady!"],
    function(arcgisUtils ){
        // var myMap = new Map('viewMap',{
        //     basemap: dark-gray,
        //     center: [-3,40],
        //     scale:15
        // });

        var webMap= arcgisUtils.createMap("ccc076ca320440d589b3a75120f9727e", "viewDiv").then(function(response){
            console.log('res',response);
        });
    }
);