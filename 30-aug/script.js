/*
function sum(x,y){

    return function inner(y){
        if(y)
        {
            x=x+y
            return inner
        }
        else{
            return x;
        }
    }
}

console.log(sum(2)(7)(3)(2)(1)(6)())
*/

/*
var im=document.querySelector(".img")
var url=im.getAttribute("src");
im.setAttribute("alt","demo-image")
im.removeAttribute("src")
console.log(url)

*/

function createElement(){
    var txt=document.createElement("input")
    txt.setAttribute("type","text")
    txt.setAttribute("class","control")
    return txt;
}

document.getElementById("btn").addEventListener("click",function(){

    var e=createElement()
    document.body.appendChild(e)

})








