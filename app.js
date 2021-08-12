function Validate(){
    var age=parseInt(document.getElementById("txt").value);
    var msg=""
    if(age>=18){
        msg="you are eligible for vote !"
    }
    else
    {
        msg=" you are not eligible, but you may eligible after "+(18-age)+" year";
    }
    document.getElementById("msg").innerHTML=msg
}

document.getElementById("btn").addEventListener("click", Validate)
