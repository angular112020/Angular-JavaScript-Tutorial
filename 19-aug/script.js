/*
function FormatString(){
    var str="this is the india where everone is a freedom"
    var skip=["is","are","i","a"]
    var str2=str.split(" ");
    var narr=[]
    str2.forEach(function(s,i){

        if(!skip.includes(s)){
           var ss=s.split("")
           ss.splice(0,1,ss[0].toUpperCase())
           narr.push(ss.join(""))
        }
        else{
            narr.push(s)
        }
    })
    console.log(narr.join(" "))
}

FormatString()
*/
/*
function formatEmail(){
    var email="abhishek00912@yahoo.com";
    var arr=email.split("@")
    var username=arr[0].substr(0,3)+"*".repeat(arr[0].length-3)+email.slice(email.indexOf("@"))
    document.write(username)
}

formatEmail()
*/

/*
var obj={"name":"abc","age":23}

var obj2={}
//obj2=Object.assign({},obj)

//console.log(obj2)

Object.prototype.myassign=function(obj2,obj){
    var obj3={}
    for(var p in obj){
        obj3[p]=obj[p]
    }
    obj2=obj3
    return obj3
}


var myobj=Object.myassign(obj2,obj)
console.log(myobj)
*/


//console.log(Math.abs(-10))
//console.log(Math.pow(4,2))
/*
console.log(Math.ceil(5.3))
console.log(Math.floor(5.3))
console.log(Math.round(5.5))
*/

//console.log(Math.ceil(Math.random()*10000))

//console.log(Math.imul(4,5))
//console.log(Math.PI)

/*
var dd=new Date()
console.log(dd.getFullYear())
console.log(dd.getDate())
console.log(dd.getMonth())
console.log(dd.getDay())
console.log(dd.toDateString())
console.log(dd.toTimeString())
console.log(dd.toString())
console.log(dd.toLocaleDateString())
console.log(dd.toLocaleTimeString())
*/


setInterval(function(){
var date=Intl.DateTimeFormat("en-Us",{dateStyle:"medium", timeStyle:"medium"})
var dd=date.format(new Date())
document.getElementById("box").innerHTML=dd

},1000)


setTimeout(function(){
    alert("hi time completed !")
},5000)


































