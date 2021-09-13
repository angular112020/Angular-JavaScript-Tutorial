/*
enum days{
    "mon",
    "tues",
    "wed",
    "thurs",
    "fri"
}


let workingday:days;

workingday=days.mon
console.log(days[workingday])
*/

/*
for(let i:number=1; i<=10; i++){
    console.log(i)
}
*/

/*
var stat:number|boolean;

stat=true
*/

// let items:any[]
// items.push(111)

/*
class Employee{
    public name:string;
    public email:string;
    private salary:number;
    public constructor(name:string,email:string,salary:number){
        this.name=name;
        this.email=email;
        this.salary=salary;
    }

    public calculatesalary():number{
        let salary=this.salary/12;
        return salary;
    }

}

let obj=new Employee("ajay","ajay232@gmail.com",120000);

console.log(obj)
console.log(obj.calculatesalary())

*/

/*
abstract class ABC{

 public method1(){
    console.log("hello method 1")
}

 abstract method2();

}


class XYZ extends ABC{
    method2() {
      console.log("XYZ metho 2")
    }

}



var obj=new XYZ()
obj.method1()
obj.method2()
*/


interface IEmployee
{
    create():void;
    update():void;
    getall():string
}

class Employee implements IEmployee
{
    create(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    getall(): string {
        throw new Error("Method not implemented.");
    }
    
}


























































