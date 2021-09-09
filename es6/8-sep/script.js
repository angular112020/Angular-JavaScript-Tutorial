class CommanEmployee{
    constructor(name,email){
        this.name=name;
        this.email=email;
      
    }
    getdetails(){
        let temp=`Name: ${this.name}<br/>Email : ${this.email}<br/>`
        return temp;
    }

    test(){
        console.log("hi  i am from test comman")
    }
}


class FullTimeEmployee extends CommanEmployee{
    constructor(name,email,anualsalary){
        super(name,email)
        this.anualsalary=anualsalary;
    }

    calculatesalary(commision=0){
        return this.anualsalary/12+commision;
    }

    test(){
        console.log("i am from full time")
    }
 
}

let emp=new FullTimeEmployee("rahul","rahul99@gmail.com",120000);
emp.test()
document.write(emp.getdetails())
document.write(emp.calculatesalary(3000))


document.write("<hr/>")

class PartTimeEmployee extends FullTimeEmployee{
    constructor(name,email,perhour,totalhour){
        super(name,email)
        this.perhour=perhour;
        this.totalhour=totalhour;
    }

    calculatesalary(){
        return this.perhour*this.totalhour;
    }

}

let emp2=new PartTimeEmployee("Ajay","ajay99@gmail.com",600,130);

document.write(emp2.getdetails())
document.write(emp2.calculatesalary())









