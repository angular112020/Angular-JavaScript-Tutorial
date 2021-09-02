
function SendAjax(){
    //var http=new XMLHttpRequest();
  //  var http2=new XMLDocument();
  //  console.log(http)
  //  console.log(http2)


var http;
if(XMLHttpRequest){
    http= new XMLHttpRequest()
}
else{
    http=new XMLDocument();
}

console.log(http)
}

SendAjax()