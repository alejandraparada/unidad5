require(
    ["esri/map", 
    "esri/layers/FeatureLayer",
    "esri/geometry/Extent",
    "esri/SpatialReference",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/dijit/HomeButton",
    "esri/dijit/BasemapToggle",
    "esri/dijit/OverviewMap",
    "esri/dijit/Legend",
    "esri/arcgis/utils",
    "dojo/domReady!"],
    function(Map, FeatureLayer, Extent, SpatialReference, ArcGISDynamicMapServiceLayer, HomeButton, BasemapToggle, OverviewMap, Legend, utils ){
        var myMap = new Map('viewDiv', {
            basemap: 'satellite',
            //center: [-158.20408624499998, 19.067062212000053],
            zoom: 4,
            extent: new Extent(-122.68,45.53,-122.45,45.60, new SpatialReference({ wkid:4326 }))
        });

        ////Web Service USA
        //var urlEstados = 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2';
        //var urlCounties= 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/3';
        //var urlHighways= 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/1';
        //var urlCities= 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0';
        var urlUSA = 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';
        var usa = new ArcGISDynamicMapServiceLayer(urlUSA, {
            opacity: 0.4
        });
        
        //var counties = new FeatureLayer(urlCounties);
        //myMap.addLayer(counties);
        //var estados = new FeatureLayer(urlEstados);
        //myMap.addLayer(estados);
        //var highways = new FeatureLayer(urlHighways);
        //myMap.addLayer(highways);
        //var cities = new FeatureLayer(urlCities);
        //myMap.addLayer(cities);


        //Terremotos USA
        var urlTerremotos = 'https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Earthquakes/FeatureServer/0'
        var terremotos = new FeatureLayer(urlTerremotos);
        terremotos.setDefinitionExpression("MAGNITUDE > 2");

        //myMap.addLayer(usa);
        //myMap.addLayer(terremotos);
        myMap.addLayers([usa,terremotos]);

        var casa = HomeButton({
            map: myMap,
        },"homeDiv");
        casa.startup();

        var basemapToggle = new BasemapToggle({
            map: myMap,
            basemap: "dark-gray"
        }, "togDiv");
        basemapToggle.startup();

        var overviewMapDijit = new OverviewMap({
            map: myMap,
            attachTo: "bottom-right",
            visible:true,
        },);
        overviewMapDijit.startup();

        //var leyenda= new Legend({
        //    map: myMap,
        //
        //},'lyDiv');
        //leyenda.startup();

        myMap.on('layers-add-result', displayLeyend);
        function displayLeyend(){
            console.log('capas cargadas');
            var leyenda= new Legend({
                map: myMap
            },'lyDiv')
            leyenda.startup();
        }


    }


);