//var mobile={"brand":"Samsung","model":"j9","price":12000}

/*
document.write(mobile.brand+"<br/>")
document.write(mobile.model+"<br/>")
document.write(mobile.price+"<br/>")
*/

//for(var p in mobile)
//document.write(mobile[p]+"<br/>")

//document.write(mobile["model"])

/*
var Mobile=function(brand,price,model){
    this.brand=brand;
    var _price=price;
    this.model=model;
    Object.defineProperty(this,"price",{
        get:function(){return _price},
        set:function(value){
            if(value>=5000){
                _price=value
            }
            else{
                throw Error("insufficient price ?")
            }
        }
    })
}


var mobile=new Mobile("Samsung",11000,"A50")
Object.seal(mobile)
mobile.xyz=3453
console.log(mobile)
document.write("-------mobile details----------<br/>")
document.write(mobile.brand+"<br/>")
document.write(mobile.model+"<br/>")
document.write(mobile.price+"<br/>")

mobile.price-=5000

document.write("-------mobile details after changes----------<br/>")
document.write(mobile.brand+"<br/>")
document.write(mobile.model+"<br/>")
document.write(mobile.price+"<br/>")
*/

/*
var mobile=new Object()
mobile.brand="samsung"
mobile["price"]=2000
console.log(mobile)
*/

var mobile={"brand":"Samsung","model":"j9","price":12000}

var mobile2=new Object();

//Object.assign(mobile2,mobile)
// Object.prototype.copyObject=function(){

//     var obj=this;
//     var coped={}
//     for(var p in obj)
//     coped[p]=obj[p]

//     return coped;
// }
// mobile2=mobile.copyObject()

// delete mobile2.price

// console.log(mobile)
// console.log(mobile2)



var a=10
var b=20

var a=eval("a*b")+"<br/>"
var b=eval("a+b")+"<br/>"
var c=eval("a+b")+"<br/>"

var res=a+b+c

document.write(res)
console.log(res)










