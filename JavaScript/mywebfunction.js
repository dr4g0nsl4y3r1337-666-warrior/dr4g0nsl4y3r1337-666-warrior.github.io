var previous = 1;
function setPortionSizeforHenrik(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<11; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}

function setPortionSizeforJuan(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<12; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}
function setPortionSizeforJonas(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<6; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}
function setPortionSizeforChristos(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<6; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}
function setPortionSizeforAnton(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<6; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}
