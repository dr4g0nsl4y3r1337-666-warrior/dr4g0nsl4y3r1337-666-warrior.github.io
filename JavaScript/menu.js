$("#mobileMenu" ).click(function() {
    if($("#mobilePopUpMenu").is(":hidden")){
        $('#mobilePopUpMenu').slideDown(300);
    }
    else{
        $('#mobilePopUpMenu').slideUp(300);
    }
});
