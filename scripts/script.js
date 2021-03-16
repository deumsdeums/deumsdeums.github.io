window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    fetch("https://deumsserver.herokuapp.com/almanax").then(response => console.log(response))
}