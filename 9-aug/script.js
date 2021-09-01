function GetSamll(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var n3=parseInt(document.getElementById("n3").value);
    /*
    var min=n1;
    if(min>n2)min=n2
    if(min>n3) min=n3
    */

    var min=0;
    if(n1<n2 && n1<n3)
    min=n1
    else if(n2<n1 && n2<n3)
    min=n2
    else
    min=n3


    document.getElementById("result").innerHTML="Smallest : "+min

}

//document.getElementById("btn").addEventListener("click", GetSamll)

//--------------discount---------//
/*
function calcdiscount(){
    var amt=parseFloat(document.getElementById("n1").value)
    var discount=0,rest=0
    var msg="";
    if(amt>=5000)
    {
        discount=amt*30/100;
        rest=amt-discount;
    }
    else if(amt>=3000){
        discount=amt*20/100;
        rest=amt-discount;
    }
    else if(amt>=2000){
        discount=amt*15/100;
        rest=amt-discount;
    }
    else{
        discount=0;
        rest=amt;
        msg="Shop more to get discount !"
    }
    document.getElementById("result").innerHTML="Your total discount : "+discount+"<br/> Please you pay : "+rest+"<br/>"+msg
}

//document.getElementById("btn").addEventListener("click", calcdiscount)

//-------------toggle-----------//


document.getElementById("sign").addEventListener("click", function(){
document.querySelector(".box").style="display:block"
document.querySelector(".box2").style="display:none"

})

document.getElementById("signup").addEventListener("click", function(){
    document.querySelector(".box2").style="display:block"
    document.querySelector(".box").style="display:none"
    
})

/*

var n=-4;
var r=n%2;
switch(r)
{
    case 0:
        document.write("Even")
        break;
    case 1:
        document.write("Odd")
        break;
    default:
        document.write("Unknown")
        break;
}


document.write(new  Date().getDay())

*/


var i=1
var n=8
for(;i<=10;)
{
    var t=n*i
    document.write("<br/>"+n+ " x "+i+"= "+t)
    i++
}
