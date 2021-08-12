//var items=["php","java","asp","angular"]

/*
items.forEach((v,i)=>{
    document.write("Value:  "+v+", index : "+i+"<br/>")
})

*/

/*

var count=0
items.forEach(callback)

function callback(v,i){
    count++;
    document.write("Value:  "+v+", index : "+i+"<br/>")
}
console.log(count)

*/

/*
for(var item of items){
    document.write("Value:  "+item+"<br/>")   
}
*/

/*
for(var item of items.keys()){
    document.write("Value:  "+item+"<br/>")   
}
*/

/*
for(var [index,item] of items.entries()){
    document.write("Value:  "+item+" index : "+index+"<br/>")   
}
*/
/*
var person={"id":1,"name":"deepak","age":23,"gender":"male"};

//document.write("Name : "+person.name)

for(var p in person){
    document.write("Prop : "+p+", Value : "+person[p]+"<br/>")
}

*/

//var items=[4,5,6,7,8,9];

//var items=new Array(5,6,7)


//console.log(Array.isArray(items))
//console.log(items instanceof Array)
//items.push(10)
//items.unshift(10)
//items.splice(2,3,20,60,40)

//items[items.length]=20;

//items.pop()
//items.shift()

//console.log(items)

var items=[]
function AddItem(){
    var txt=document.getElementById("txt").value;
    items.push(txt)
    BindItem(items)
}


document.getElementById("btn").addEventListener("click", AddItem)

function BindItem(arr){
  
   // var temp=``
   var temp="" 
   arr.forEach(e => {
       // temp+=`<li>${e}</li>`
       temp+="<li>"+e+"</li>"
    });
    document.getElementById("list").innerHTML=temp

}


var nums=[2,3,4,5]

//nums.splice(0,nums.length)
//nums.length=0
//console.log(nums)





























