/*
console.log("--start--")
var z;

function product(x,y,callback){
    setTimeout(function(){
        z=x*y
        console.log("--process--")
        callback(z)
    },5000)
   
}

product(5,6,function(r){
    console.log("result",r)

})
console.log("--end--")
*/

function httpget(url,callback)
{
var http=new XMLHttpRequest()
http.open("GET",url)
http.send()
http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
{
    var result= JSON.parse(this.response)
    callback(result);
}
}
}

document.getElementById("btn").addEventListener("click",function(){
    httpget("https://jsonplaceholder.typicode.com/posts/",(r)=>{
    console.log(r)
    var temp=``
    r.forEach((data)=>{

        temp+=`<div class="col-4"><div class="card shadow">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
            <p class="card-text">${data.body}</p>
        </div>
        <div class="card-body card-p">
            <div class="row">
                <div class="col col-xs-4 ">
                    <i class="far fa-comments"></i> 456
                </div>
                <div class="col col-xs-4 ">
                    <i class="far fa-heart"></i> 2.4k
                </div>
                <div class="col col-xs-4">
                    <i class="fas fa-share"></i> 99
                </div>
            </div>
        </div>
    </div></div>`
    })

document.querySelector(".posts").innerHTML=temp;



    })
})

document.getElementById("btn2").addEventListener("click",function(){
  httpget("https://jsonplaceholder.typicode.com/users/",(r2)=>{
    console.log(r2)
})
})
