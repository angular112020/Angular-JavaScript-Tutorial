/*
function sum(x,y)
{
    var z=0;
    for(var i=0; i<arguments.length; i++){
        z+=arguments[i]
    }
    return z
}

console.log(sum(2,5,7,9,11,22,33))
*/

// function sum(x,y,...rest)
// {
//     var z=x+y
//     for(var i=0; i<rest.length; i++){
//         z+=rest[i]
//     }
//     return z
// }

// console.log(sum(2,3,5,7,8,3))

// function product(x,y=1){
//     var r=x*y;
//     return r;
// }


// console.log(product(3,2))

/*
function Test(obj){
    obj.x+=10;
    obj.y+=20
    console.log("Inside x "+obj.x)
    console.log("Inside y "+obj.y)
    
}

var o={"x":2,"y":3}
  Test(o)

    console.log("Outside x "+o.x)
    console.log("Outside y "+o.y)

*/

function Test(a,b){
    a+=10;
    b+=20
    console.log("Inside x "+a)
    console.log("Inside y "+b)
    
}

var o={"x":2,"y":3}
  Test(o.x,o.y)

    console.log("Outside x "+o.x)
    console.log("Outside y "+o.y)


















