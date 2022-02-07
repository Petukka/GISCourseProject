//Course: CS31A0830 Geographic Information Systems
//Maker: Petri Rämö
//Date: 07.02.2022

//function to make a line
function makeLine(coord) {

    var latlngs = [coord];

    return L.polyline(latlngs, {color: 'red'}).addTo(map);
}

//function to make a polygon
function makePolygon(coord, name) {

    var latlngs = [coord];

    var polygon = new L.polygon(latlngs, {color: 'blue'}).addTo(map)

    return polygon.bindPopup(name);
}

//function to give every marker a popup with information
function onEachFeature(feature, layer) {
    
    layer.bindPopup(feature.properties.display_name);
    
}

//function to load all the GeoJson points and placing them in the map
function getData(urladdress){
    var geojson = $.ajax({
        url: urladdress,
        dataType: "json",
        success: console.log("Data Loaded")
    })

    $.when(geojson).done(function () {

        var points = L.geoJson(geojson.responseJSON,{
            onEachFeature: onEachFeature
        }).addTo(map);

        return(points);
    });

}