/*
var sum=(x,y,...rest)=>{
    var s=x+y;
    console.log(rest)
    return s;
}
var p2=[3,9,7]
var p=[4,5,...p2]

console.log(p)
console.log(sum(...p))
*/
/*
var p1=[1,2,3]
var p2=[4,5,6]
var p3=[11,22,33]

//var p4=p1.concat(p2.concat(p3))
var p4=[...p1,...p2,...p3]


console.log(p4)

*/

var name="deepak"
var age=23
var gender=1

//var pp="Name = "+name+", Age = "+age+", Gender= "+(gender==1?'Male':'Female')

var pp=`Name = ${name}, Age= ${age}, Gender= ${gender==1?'Male':'Female'}`
document.write(pp)


























