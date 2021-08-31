/*
document.getElementById("btn").addEventListener("click",function(){
    //var h=document.querySelector(".hh")
    //h.style.color="green"
    this.previousElementSibling.style.color="red"
    this.nextElementSibling.style.color="green"

    this.parentElement.nextElementSibling.children[2].style.color="yellow"
    //this.className="bold-btn"
    //this.classList.add("bold-btn")
    //this.classList.remove("btn")
    console.log(this.className)
})
*/



//document.getElementById("btn").onclick=Test;
document.getElementById("btn2").addEventListener("click",changecolor)

function changecolor(){
var code="0123456789ABCDEF";
var color="#"
for(var i=0; i<=5; i++){
color+= code.charAt(Math.floor(Math.random()*16))
}

document.querySelector("#p").style.color=color
}

document.getElementById("btn").addEventListener("click",function(){

document.getElementById("btn2").removeEventListener("click",changecolor)

})