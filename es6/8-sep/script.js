class Hotel{

    constructor(){
        this.hotelname="Vrindavan";
        this.totalroom=200;
        this.bookedroom=140;
        this.location="mathura"
    }

    getAvailibility(){
        return this.totalroom-this.bookedroom;
    }
    printdetails(){
        let temp=`<h4>Name: ${this.hotelname}</h4>`
         temp+=`<p>Total Room: ${this.totalroom}<br/>`
         temp+=`Booked: ${this.bookedroom}<br/>`
         temp+=`Location : ${this.location}</p>`
         temp+=`<h4>Total available room: ${this.getAvailibility()}</h4>`
        return temp
        
    }
}

let hotel=new Hotel()
document.querySelector("#box").innerHTML=hotel.printdetails()
