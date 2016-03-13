var ids = ["topAnton.html", "topHenrik.html", "topJonas.html", "topChristos.html", "topJuan.html"];

var urls = ["https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar", "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor"];

var grades = [];

$( document ).ready(function() {
  // Handler for .ready() called.
    var i;
    var maxPos;
    var top1;
    
    for (i = 0; i < 5; i++) {

        $.ajax({
            method: "GET",
            url: urls[i],
            success: function(data) {
                grades.push(data.rating.toFixed(2));
                $('#demo').text(grades);
                console.log(grades);
            },     
        });
    }
    if(grades[1]>grades[0]){
    $("#top1").attr("src", ids[1]);
    }                    
});