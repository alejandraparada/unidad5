require([
    "dojo/parser",
    "esri/map",
    "esri/dijit/Search",
    "dojo/domReady!"
], 
    function (parser, Map, Search) {
        // Parse DOM nodes decorated with the data-dojo-type attribute
        parser.parse();
        var myMap = new Map('cpCenter', {
            basemap: 'satellite',
            center: [-3, 40],
            zoom: 15
            // scale: 25000
        });
        var searchWidget = new Search({
            map: myMap,
            ///////
            // enableSuggestionsMenu:true,
            enableSuggestions: true,
            maxSuggestions: 4,
            minCharacters: 4,
            ///////
            enableButtonMode: false,
            enableLabel: true,
            enableInfoWindow: false,
            showInfoWindowOnSelect: true,

        },"divSearch");
    }

);
