
var count=1;

document.getElementById("b1").style.background="yellow"; 
function fill(address)
{   if(count<=9)
	{
    //  document.getElementById("b1").style.background="yellow"; 
	  if(count%2!==0)
	   {	
        document.getElementById("b1").style.background="gray";   
	    document.getElementById(address.id).innerHTML="X";
		 document.getElementById("b2").style.background="yellow";
	   }
      else
	   {
		document.getElementById("b1").style.background="yellow";   
       document.getElementById(address.id).innerHTML="Y";
	   document.getElementById("b2").style.background="gray";
	   }
      count++;
    //  document.getElementById("b2").style.background="yellow"; 
	  
	  if(checkWinner())
		{
			alert("Winner")
			reset();
			count=1;
		}
	}
	
	else
	{
		alert("Match Draw");
		reset();
		count=1;
	}
}
function reset()
{
	for(var i=1;i<=9;i++)
	{
		document.getElementById("div"+i).innerHTML="";
	}
}

function checkWinner()
{
	if(getDeta("div1")!=="" && getDeta("div2")!=="" && getDeta("div3")!=="" && getDeta("div1")===getDeta("div2")&&getDeta("div2")===getDeta("div3"))
		return true;
	else if(getDeta("div1")!=="" && getDeta("div5")!=="" && getDeta("div9")!=="" && getDeta("div1")===getDeta("div5")&& getDeta("div5")===getDeta("div9"))
		return true;
	else if(getDeta("div3")!=="" && getDeta("div5")!=="" && getDeta("div7")!=="" && getDeta("div3")===getDeta("div5")&&getDeta("div7")===getDeta("div3"))
		return true;
	else if(getDeta("div1")!=="" && getDeta("div4")!=="" && getDeta("div7")!=="" && getDeta("div1")===getDeta("div4")&&getDeta("div7")===getDeta("div4"))
		return true;
	else if(getDeta("div2")!=="" && getDeta("div5")!=="" && getDeta("div7")!=="" && getDeta("div2")===getDeta("div5")&&getDeta("div7")===getDeta("div7"))
		return true;
	else if(getDeta("div3")!=="" && getDeta("div6")!=="" && getDeta("div9")!=="" && getDeta("div3")===getDeta("div6")&&getDeta("div6")===getDeta("div9"))
		return true;
	else if(getDeta("div7")!=="" && getDeta("div8")!=="" && getDeta("div9")!=="" && getDeta("div7")===getDeta("div8")&&getDeta("div8")===getDeta("div9"))
		return true;
	else if(getDeta("div4")!=="" && getDeta("div5")!=="" && getDeta("div6")!=="" && getDeta("div4")===getDeta("div5")&&getDeta("div5")===getDeta("div6"))
		return true;
}

//get the deta from html paze

function getDeta(id)
{
	return document.getElementById(id).innerHTML;
}