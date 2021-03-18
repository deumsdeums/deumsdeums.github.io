$(document).ready(function(){
    loadAlmanax()
    loadPortals()

})



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
        portals.forEach(portal => {
            if(portal.position==0){
                portal.position="INCONNUE"
                portal.utilisation=""
                portal.maj=""

            }
            $('.portal').append(buildPortalCard(portal))
        });
    })
}

function buildPortalCard(portal){
   return '<div class="card text-white bg-dark mb-3 col" id="'+portal.dimension+'"><h2>'+portal.dimension+'</h2><div class="img"></div> <div class="card-body"><b onClick="copyPos(this)" data-toggle="tooltip" title="Copier" class="position">'+portal.position+'</b> Utilisations : <b class="utilisation" style="color:green">'+portal.utilisation+'</b></div><div class="card-footer">Mise à jour :<br><i class="maj">'+portal.maj+'</i></div></div>'
}
function copyPos(elem){
    navigator.clipboard.writeText(elem.textContent)

}