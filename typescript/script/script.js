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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.method1 = function () {
        console.log("hello method 1");
    };
    return ABC;
}());
var XYZ = /** @class */ (function (_super) {
    __extends(XYZ, _super);
    function XYZ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XYZ.prototype.method2 = function () {
        console.log("XYZ metho 2");
    };
    return XYZ;
}(ABC));
var obj = new XYZ();
obj.method1();
obj.method2();
