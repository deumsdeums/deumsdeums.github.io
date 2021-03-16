window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    let request = new XMLHttpRequest();
    request.open("GET","http://www.krosmoz.com/fr/almanax",true)
    request.send();
    let response = request.responseText;
    response.
}