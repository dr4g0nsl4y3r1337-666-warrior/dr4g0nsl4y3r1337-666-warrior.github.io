var starc = ["", "#starc1", "#starc2", "#starc3", "#starc4", "#starc5"];
var votec = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar&rating=";

$("#starc1").hover(function(){
        $("#starc1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starc1").css("-webkit-filter", "grayscale(100%)");
    });
$("#starc2").hover(function(){
        $("#starc1").css("-webkit-filter", "grayscale(0%)");
        $("#starc2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starc1").css("-webkit-filter", "grayscale(100%)");
        $("#starc2").css("-webkit-filter", "grayscale(100%)");
    });
$("#starc3").hover(function(){
        $("#starc1").css("-webkit-filter", "grayscale(0%)");
        $("#starc2").css("-webkit-filter", "grayscale(0%)");
        $("#starc3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starc1").css("-webkit-filter", "grayscale(100%)");
        $("#starc2").css("-webkit-filter", "grayscale(100%)");
        $("#starc3").css("-webkit-filter", "grayscale(100%)");
    });
$("#starc4").hover(function(){
        $("#starc1").css("-webkit-filter", "grayscale(0%)");
        $("#starc2").css("-webkit-filter", "grayscale(0%)");
        $("#starc3").css("-webkit-filter", "grayscale(0%)");
        $("#starc4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starc1").css("-webkit-filter", "grayscale(100%)");
        $("#starc2").css("-webkit-filter", "grayscale(100%)");
        $("#starc3").css("-webkit-filter", "grayscale(100%)");
        $("#starc4").css("-webkit-filter", "grayscale(100%)");
    });
$("#starc5").hover(function(){
        $("#starc1").css("-webkit-filter", "grayscale(0%)");
        $("#starc2").css("-webkit-filter", "grayscale(0%)");
        $("#starc3").css("-webkit-filter", "grayscale(0%)");
        $("#starc4").css("-webkit-filter", "grayscale(0%)");
        $("#starc5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starc1").css("-webkit-filter", "grayscale(100%)");
        $("#starc2").css("-webkit-filter", "grayscale(100%)");
        $("#starc3").css("-webkit-filter", "grayscale(100%)");
        $("#starc4").css("-webkit-filter", "grayscale(100%)");
        $("#starc5").css("-webkit-filter", "grayscale(100%)");
    });

$('#starc1').click(function() {
   votesc(1);
});
$('#starc2').click(function() {
   votesc(2);
});
$('#starc3').click(function() {
   votesc(3);
});
$('#starc4').click(function() {
   votesc(4);
});
$('#starc5').click(function() {
   votesc(5);
});




function votesc(i){

        
    $.ajax({
        method: "GET",
        url:  votec+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar",
                success: function(data) {
                    $('#votesc').text(data.votes+" röster");
                    $('#ratingc').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar",
        success: function(data) { 
            $('#votesc').text(data.votes+" röster");
            $('#ratingc').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});





var starab = ["", "#starab1", "#starab2", "#starab3", "#starab4", "#starab5"];
var voteab = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar&rating=";

$("#starab1").hover(function(){
        $("#starab1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starab1").css("-webkit-filter", "grayscale(100%)");
    });
$("#starab2").hover(function(){
        $("#starab1").css("-webkit-filter", "grayscale(0%)");
        $("#starab2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starab1").css("-webkit-filter", "grayscale(100%)");
        $("#starab2").css("-webkit-filter", "grayscale(100%)");
    });
$("#starab3").hover(function(){
        $("#starab1").css("-webkit-filter", "grayscale(0%)");
        $("#starab2").css("-webkit-filter", "grayscale(0%)");
        $("#starab3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starab1").css("-webkit-filter", "grayscale(100%)");
        $("#starab2").css("-webkit-filter", "grayscale(100%)");
        $("#starab3").css("-webkit-filter", "grayscale(100%)");
    });
$("#starab4").hover(function(){
        $("#starab1").css("-webkit-filter", "grayscale(0%)");
        $("#starab2").css("-webkit-filter", "grayscale(0%)");
        $("#starab3").css("-webkit-filter", "grayscale(0%)");
        $("#starab4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starab1").css("-webkit-filter", "grayscale(100%)");
        $("#starab2").css("-webkit-filter", "grayscale(100%)");
        $("#starab3").css("-webkit-filter", "grayscale(100%)");
        $("#starab4").css("-webkit-filter", "grayscale(100%)");
    });
$("#starab5").hover(function(){
        $("#starab1").css("-webkit-filter", "grayscale(0%)");
        $("#starab2").css("-webkit-filter", "grayscale(0%)");
        $("#starab3").css("-webkit-filter", "grayscale(0%)");
        $("#starab4").css("-webkit-filter", "grayscale(0%)");
        $("#starab5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starab1").css("-webkit-filter", "grayscale(100%)");
        $("#starab2").css("-webkit-filter", "grayscale(100%)");
        $("#starab3").css("-webkit-filter", "grayscale(100%)");
        $("#starab4").css("-webkit-filter", "grayscale(100%)");
        $("#starab5").css("-webkit-filter", "grayscale(100%)");
    });


$('#starab1').click(function() {
   votesab(1);
});
$('#starab2').click(function() {
   votesab(2);
});
$('#starab3').click(function() {
   votesab(3);
});
$('#starab4').click(function() {
   votesab(4);
});
$('#starab5').click(function() {
   votesab(5);
});



function votesab(i){

        
    $.ajax({
        method: "GET",
        url:  voteab+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar",
                success: function(data) {
                    $('#votesab').text(data.votes+" röster");
                    $('#ratingab').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar",
        success: function(data) { 
            $('#votesab').text(data.votes+" röster");
            $('#ratingab').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});


var stark = ["", "#stark1", "#stark2", "#stark3", "#stark4", "#stark5"];
var votek = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar&rating=";

$("#stark1").hover(function(){
        $("#stark1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#stark1").css("-webkit-filter", "grayscale(100%)");
    });
$("#stark2").hover(function(){
        $("#stark1").css("-webkit-filter", "grayscale(0%)");
        $("#stark2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#stark1").css("-webkit-filter", "grayscale(100%)");
        $("#stark2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#stark1").css("-webkit-filter", "grayscale(0%)");
        $("#stark2").css("-webkit-filter", "grayscale(0%)");
        $("#stark3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#stark1").css("-webkit-filter", "grayscale(100%)");
        $("#stark2").css("-webkit-filter", "grayscale(100%)");
        $("#stark3").css("-webkit-filter", "grayscale(100%)");
    });
$("#stark4").hover(function(){
        $("#stark1").css("-webkit-filter", "grayscale(0%)");
        $("#stark2").css("-webkit-filter", "grayscale(0%)");
        $("#stark3").css("-webkit-filter", "grayscale(0%)");
        $("#stark4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#stark1").css("-webkit-filter", "grayscale(100%)");
        $("#stark2").css("-webkit-filter", "grayscale(100%)");
        $("#stark3").css("-webkit-filter", "grayscale(100%)");
        $("#stark4").css("-webkit-filter", "grayscale(100%)");
    });
$("#stark5").hover(function(){
        $("#stark1").css("-webkit-filter", "grayscale(0%)");
        $("#stark2").css("-webkit-filter", "grayscale(0%)");
        $("#stark3").css("-webkit-filter", "grayscale(0%)");
        $("#stark4").css("-webkit-filter", "grayscale(0%)");
        $("#stark5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#stark1").css("-webkit-filter", "grayscale(100%)");
        $("#stark2").css("-webkit-filter", "grayscale(100%)");
        $("#stark3").css("-webkit-filter", "grayscale(100%)");
        $("#stark4").css("-webkit-filter", "grayscale(100%)");
        $("#stark5").css("-webkit-filter", "grayscale(100%)");
    });


$('#stark1').click(function() {
   votesk(1);
});
$('#stark2').click(function() {
   votesk(2);
});
$('#stark3').click(function() {
   votesk(3);
});
$('#stark4').click(function() {
   votesk(4);
});
$('#stark5').click(function() {
   votesk(5);
});


function votesk(i){

        
    $.ajax({
        method: "GET",
        url:  votek+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar",
                success: function(data) {
                    $('#votesk').text(data.votes+" röster");
                    $('#ratingk').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar",
        success: function(data) { 
            $('#votesk').text(data.votes+" röster");
            $('#ratingk').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});




var starap = ["", "#starap1", "#starap2", "#starap3", "#starap4", "#starap5"];
var voteap = "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=";

$("#starap1").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap2").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap3").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap4").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        $("#starap4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
        $("#starap4").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap5").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        $("#starap4").css("-webkit-filter", "grayscale(0%)");
        $("#starap5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
        $("#starap4").css("-webkit-filter", "grayscale(100%)");
        $("#starap5").css("-webkit-filter", "grayscale(100%)");
    });



$('#starap1').click(function() {
   votesap(1);
});
$('#starap2').click(function() {
   votesap(2);
});
$('#starap3').click(function() {
   votesap(3);
});
$('#starap4').click(function() {
   votesap(4);
});
$('#starap5').click(function() {
   votesap(5);
});



function votesap(i){

        
    $.ajax({
        method: "GET",
        url:  voteap+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj",
                success: function(data) {
                    $('#votesap').text(data.votes+" röster");
                    $('#ratingap').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj",
        success: function(data) { 
            $('#votesap').text(data.votes+" röster");
            $('#ratingap').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});


var starp = ["", "#starp1", "#starp2", "#starp3", "#starp4", "#starp5"];
var votep = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor&rating=";

$("#starp1").hover(function(){
        $("#starp1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starp1").css("-webkit-filter", "grayscale(100%)");
    });
$("#starp2").hover(function(){
        $("#starp1").css("-webkit-filter", "grayscale(0%)");
        $("#starp2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starp1").css("-webkit-filter", "grayscale(100%)");
        $("#starp2").css("-webkit-filter", "grayscale(100%)");
    });
$("#starp3").hover(function(){
        $("#starp1").css("-webkit-filter", "grayscale(0%)");
        $("#starp2").css("-webkit-filter", "grayscale(0%)");
        $("#starp3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starp1").css("-webkit-filter", "grayscale(100%)");
        $("#starp2").css("-webkit-filter", "grayscale(100%)");
        $("#starp3").css("-webkit-filter", "grayscale(100%)");
    });
$("#starp4").hover(function(){
        $("#starp1").css("-webkit-filter", "grayscale(0%)");
        $("#starp2").css("-webkit-filter", "grayscale(0%)");
        $("#starp3").css("-webkit-filter", "grayscale(0%)");
        $("#starp4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starp1").css("-webkit-filter", "grayscale(100%)");
        $("#starp2").css("-webkit-filter", "grayscale(100%)");
        $("#starp3").css("-webkit-filter", "grayscale(100%)");
        $("#starp4").css("-webkit-filter", "grayscale(100%)");
    });
$("#starp5").hover(function(){
        $("#starp1").css("-webkit-filter", "grayscale(0%)");
        $("#starp2").css("-webkit-filter", "grayscale(0%)");
        $("#starp3").css("-webkit-filter", "grayscale(0%)");
        $("#starp4").css("-webkit-filter", "grayscale(0%)");
        $("#starp5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starp1").css("-webkit-filter", "grayscale(100%)");
        $("#starp2").css("-webkit-filter", "grayscale(100%)");
        $("#starp3").css("-webkit-filter", "grayscale(100%)");
        $("#starp4").css("-webkit-filter", "grayscale(100%)");
        $("#starp5").css("-webkit-filter", "grayscale(100%)");
    });



$('#starp1').click(function() {
   votesp(1);
});
$('#starp2').click(function() {
   votesp(2);
});
$('#starp3').click(function() {
   votesp(3);
});
$('#starp4').click(function() {
   votesp(4);
});
$('#starp5').click(function() {
   votesp(5);
});




function votesp(i){

        
    $.ajax({
        method: "GET",
        url:  votep+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor",
                success: function(data) {
                    $('#votesp').text(data.votes+" röster");
                    $('#ratingp').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor",
        success: function(data) { 
            $('#votesp').text(data.votes+" röster");
            $('#ratingp').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});
