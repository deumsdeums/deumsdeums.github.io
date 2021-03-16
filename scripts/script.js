window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    let request = new XMLHttpRequest();
    request.open("GET","127.0.0.1:8080/almanax",true)
    request.send();
    let response = request.response;
    console.log("réponse: "+response);
}