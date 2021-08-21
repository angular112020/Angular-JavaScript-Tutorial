
// var product=(function(x){
//     var age=0
//     console.log("Hi i am IIFE "+x)
//     console.log("i am "+age+" year old")

//     function test(){
//         console.log("i am "+age+" year old 5")
    
//     }
//     document.getElementById("btn").addEventListener("click",test)
// })("deepak")

var Employee=(function(){

        function Employee(name,email,salary){
            this.name=name;
            this.email=email;
            this.salary=salary;
            console.log("I am Constructor ")

            Employee.prototype.getDetail=function(){
                var dd="Name is "+this.name+", Email is :"+this.email+" Salary : "+this.salary
                return dd;
            }
           Employee.prototype.getmonthalysalary=function(){
                return this.salary/12
            }
        }
        
        return Employee;
})()
/*
var emp=new Employee("rajiv","raj8899@gmail.com",140000)

var emp2=new Employee("ajay","ajay8899@gmail.com",180000)
var emp3=new Employee("suraj","suraj8899@gmail.com",340000)

console.log(emp)
console.log(emp2.getmonthalysalary())
console.log(emp3)
*/


//var obj={x:10,y:20}

//delete obj.x
//obj.x=undefined
//console.log(obj)

/*
function PrintName(x){
    console.log("deepak")
    x++
    if(x<=10)
    PrintName(x)
}

PrintName(1)
*/

/*
var nums=[3,4,5,[55,66,[21,23,[65,77],90],99]]
function recur(nums)
{
nums.forEach(function(e){

    if(Array.isArray(e)){
        //furture walk
        recur(e)
    }
    else{
        console.log(e)
    }
})
}

recur(nums)
*/























