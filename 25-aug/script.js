/*
document.getElementById("frm").addEventListener("submit",function(){
event.preventDefault()
 
var data=serialize(this)
console.log(data)
})

function serialize(frm){
    var pets={}
    var obj=new FormData(frm)
    obj.forEach((e,k)=>{
       // console.log(e,k)
        pets[k]=e
    })
    return pets
}

*/
// document.forms[0].onsubmit=function(){
// alert("hello again")
// }

function loadpets(){

    /*
    var http=new XMLHttpRequest()
    http.open("GET","data/pets.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
  {
        var result= JSON.parse(this.response)
        console.log(result)
    }
    }

    */

    fetch("data/pets.json").then(function(res){
            if(res.ok){
                res.json().then(function(result){
                    console.log(result)
                })
            }
       
    })
}

loadpets()