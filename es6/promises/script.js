
/*
var i=11;
var promise=new Promise((resolve,reject)=>{

if(i>=10){
    resolve("i am resolved ")
}
else{
    reject("i have issue !")
}

})

promise.then((result)=>{

    console.log(result)

}).catch((err)=>{
    console.error(err)
})
*/
/*
fetch('https://jsonplaceholder.typicode.com/todos/').then(result=>{
    if(result.ok){
        result.json().then(data=>{
            console.log(data)
        })
    }
}).catch(error=>{

})

*/

async function CallApi()
{

var result=await fetch('https://jsonplaceholder.typicode.com/todos/')
var data=await result.json()
console.log(data)
}

CallApi()














