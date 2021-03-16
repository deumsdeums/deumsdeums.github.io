window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    let request = new XMLHttpRequest();
    fetch("localhost:8080/almanax").then(response => console.log(response))


}