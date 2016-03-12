var ids = ["antonbollar",
"applepie",
"chokladbollar",
"kanelbullar",
"proteinpannkakor"];

var urls = ["https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar",
"http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor"];



$(document).ready (function(){
	for (var i = 0; i < 5; i++) {
    $.ajax({
        method: "GET",
        url: urls[i],
        success: function(data) { 
            $(ids[i]).text(data.rating.toFixed(2));
        },     
    });
	}
});