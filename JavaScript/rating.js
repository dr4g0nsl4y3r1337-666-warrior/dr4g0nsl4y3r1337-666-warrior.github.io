var starc = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var votec = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=chokladbollar&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });

$('#star1').click(function() {
   votesc(1);
});
$('#star2').click(function() {
   votesc(2);
});
$('#star3').click(function() {
   votesc(3);
});
$('#star4').click(function() {
   votesc(4);
});
$('#star5').click(function() {
   votesc(5);
});




function votesc(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
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





var starab = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var voteab = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=72d97aca3c408e8f&recipe=chokladbollar&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });


$('#star1').click(function() {
   votesab(1);
});
$('#star2').click(function() {
   votesab(2);
});
$('#star3').click(function() {
   votesab(3);
});
$('#star4').click(function() {
   votesab(4);
});
$('#star5').click(function() {
   votesab(5);
});



function votesab(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
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


var stark = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var votek = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=kanelbullar&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });


$('#star1').click(function() {
   votesk(1);
});
$('#star2').click(function() {
   votesk(2);
});
$('#star3').click(function() {
   votesk(3);
});
$('#star4').click(function() {
   votesk(4);
});
$('#star5').click(function() {
   votesk(5);
});


function votesk(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
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




var starap = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var voteap = "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });



$('#star1').click(function() {
   votesap(1);
});
$('#star2').click(function() {
   votesap(2);
});
$('#star3').click(function() {
   votesap(3);
});
$('#star4').click(function() {
   votesap(4);
});
$('#star5').click(function() {
   votesap(5);
});



function votesap(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
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


var starp = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var votep = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });



$('#star1').click(function() {
   votesp(1);
});
$('#star2').click(function() {
   votesp(2);
});
$('#star3').click(function() {
   votesp(3);
});
$('#star4').click(function() {
   votesp(4);
});
$('#star5').click(function() {
   votesp(5);
});




function votesp(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor",
                success: function(data) {
                    $('#votesp').text(data.votes+" röster");
                    $('#rantingp').text(data.rating.toFixed(2)+" i snitt.");
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
            $('#rantingp').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});