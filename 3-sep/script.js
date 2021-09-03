function CallAjax(city){

    var key="c34c51aae4e0ce88c69bf8f7108ee2a6"
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
var http=new XMLHttpRequest();
http.open("GET",url);
//http.setRequestHeader("ContentType","text/json")
http.send()
http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
    console.log(JSON.parse(this.response))
    document.getElementById("box").innerHTML=this.response
    }

}

}
