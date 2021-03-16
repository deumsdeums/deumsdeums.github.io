window.onload=function(){
    loadAlmanax()
}

function loadAlmanax(){
    let request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        console.log("Etat "+this.readyState +" Code : "+this.status)
        if(this.readyState==4&&this.status==200){
            console.log(this.response);
        }
    }
    request.open("GET","localhost:8080/almanax",true)
    request.send();

}