require(
    ["esri/map", 
    "dojo/dom", 
    "esri/geometry/Point",
    "dojo/on",
    "dojo/domReady!"],
    function(Map, dom, Point, on){
        var myMap = new Map('divMap', {
            basemap: 'satellite',
            center: [-3, 40],
            // zoom: 15
            scale: 25000
        });
        // Seleccionado el elemento de HTML con su id
        var boton = dom.byId('btn-1'); // = document.getElementById
        
        // Opt1 ---JS - Agregamos el evento al que debe reaccionar
        // boton.addEventListener('click', goTo);
        
        // Opt2---Dojo - Evento con dojo/on
        on(boton, 'click', goTo);
        
        // Definimos la función con la que tiene que reaccionar
        function goTo() {
            var point = new Point(-67.62527778, -20.24277778);
            console.log('goTo');
            myMap.centerAt(point);
        }

        myMap.on('extent-change', showExtent);
        function showExtent(){
            console.log("extensión del mapa cambiada")
        }

        //Div vacio en html
        //Cuando hago zoom en el mapa -> buscar lista de eventos
        myMap.on('zoom-end',showZoom)
        //Se ejecuta la funcion showZoom
        function showZoom(){
            console.log("cambios")
            var zoom= myMap.getZoom();
            console.log(zoom)
            dom.byId('divEmpty').innerHTML=zoom

        }
        //Showzoom: consulta en el mapa el nivel de zoom getZoom()
        
        //Pintar por pantalla el numero que devuelve getZoom
    }
);