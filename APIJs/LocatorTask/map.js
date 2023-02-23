require([
  "dojo/parser",
  "esri/map",
  "dojo/on",
  "esri/tasks/locator",
  "esri/dijit/Search",
  "dojo/dom",
  'esri/symbols/SimpleMarkerSymbol',
  'esri/Color',
  'esri/graphic',
  'esri/symbols/TextSymbol',
  'esri/symbols/Font',
  "dojo/domReady!"
],
function (parser,Map,on, Locator, Search, dom,SimpleMarkerSymbol, Color, Graphic, TextSymbol, Font) {
  // Parse DOM nodes decorated with the data-dojo-type attribute
  parser.parse();
  // Map centered at -117.19, 34.05
  var myMap = new Map('cpCenter', {
    basemap: 'satellite',
    center: [-117.19, 34.05],
    zoom: 10,
  });
  
  var btn = dom.byId('btnLocate');
  // btn.addEventListener('click', searchLocation)
  on(btn,'click', searchLocation);

  var locator = new Locator('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer');

  function searchLocation(){
    var text = dom.byId('taAddress').value;
    console.log(text);

    var options = {
      address: {"SingleLine": text},
      outfields:["*"]
    }
    locator.addressToLocations(options)
    
  };
  locator.on('address-to-locations-complete', showResult);
  function showResult(results){
    console.log('Geocode done');

    var points = results.addresses[0].location;
    var marker= new SimpleMarkerSymbol();
    marker.setColor(new Color([230,0,169,1]));
    var grafico = new Graphic(points,marker);

    myMap.graphics.add(grafico);

    var tdireccion = results.addresses[0].address;
    var textSym = new TextSymbol();
    textSym.setText(tdireccion);
    textSym.setOffset(0,16);
    
    var font = new Font();
    font.setStyle(Font.STYLE_OBLIQUE);
    font.setVariant(Font.VARIANT_SMALLCAPS);
    font.setWeight(Font.WEIGHT_BOLD);
    textSym.setFont(font);

    var graficoText = new Graphic(points, textSym)
    myMap.graphics.add(graficoText)

    myMap.centerAndZoom(points,15);
  }
  
  
  


  


});
