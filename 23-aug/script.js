
var counter=(function(){
    var count=0

   return {
    "like":function(){return ++count;},
    "dislike":function(){return --count}
   } 
})()

//--------------------------------------//


function Product(x,y){
    var r=x*y;
    return r;
}

var res=Product(10,5)
console.log(res)