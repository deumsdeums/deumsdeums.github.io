window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    fetch("localhost:8080/almanax").then(response => console.log(response))
}