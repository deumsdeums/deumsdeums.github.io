window.onload=function(){
    loadAlmanax()
    loadPortals()
}

function loadAlmanax(){
    fetch("https://deumsserver.herokuapp.com/almanax").then(response => response.json())
    .then(almanax =>{
        document.getElementById("offrandeTitle").append(document.createElement("h2").textContent=almanax.bonusTitle)
        document.getElementById("offrandeBonus").append(document.createElement("p").textContent=almanax.bonus)
        document.getElementById("offrandeObjectif").append(document.createElement("p").textContent=almanax.objectif)
        let itemImg = new Image(50,50)
        itemImg.src=almanax.img
        document.getElementById("offrandeImg").append(itemImg)




    })
    
}
function loadPortals(){
    fetch("https://deumsserver.herokuapp.com/portals/59").then(response =>response.json())
    .then(portals=>{
        console.log(portals)
    })
}