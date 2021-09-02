/*
var all=document.getElementsByTagName("div")
for(var i=0; i<all.length; i++){
 console.log(all)
    all[i].onclick=function(){
        event.stopPropagation()
        this.style.background=GeneColor()
    }
}

function GeneColor(){
var code="0123456789ABCDEF";
var color="#"
for(var i=0; i<=5; i++){
color+= code.charAt(Math.floor(Math.random()*16))
}
return color;
}

*/

//console.log(window.innerHeight)
//console.log(window.innerWidth)
//console.log(window.outerHeight)
//console.log(window.outerWidth)

/*
document.body.onclick=function()
{
console.log(window.pageXOffset)
console.log(window.pageYOffset)
}
*/
window.onscroll=function(){
   // console.log(window.pageYOffset)
    if(window.pageYOffset>=200){
     //   alert("its over")
     document.querySelector(".box").classList.add("fixed")
    }
}

//console.log(window.location)

window.navigator.geolocation.getCurrentPosition(function(e){
   
    console.log(e.coords.latitude)
    console.log(e.coords.longitude)
    
})






