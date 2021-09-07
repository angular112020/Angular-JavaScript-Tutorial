
    var pets=[]
    function formData(){

    event.preventDefault()
     
    var data=serialize(this)
    console.log(data)
    pets.push(data)
    BindItem(pets)

    }

    
    function serialize(frm){
        var pets={}
        var obj=new FormData(frm)
        obj.forEach((e,k)=>{
        //    console.log(e,k)
            pets[k]=e
        })
        return pets
    }
    
    
    function BindItem(arr){
        var temp=``
        arr.forEach((e)=>{
    
            temp+=`<div class="col-4"><div class="card shadow">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${e.name}</h4>
                <p class="card-text">${e.address}</p>
                <p class="card-text">${e.gender}</p>
                <p class="card-text">${e.like}</p>
                <p class="card-text">${e.weight}</p>
                <p class="card-text">${e.type}</p>
            </div>
            <div class="card-body card-p">
                <div class="row">
                    <div class="col col-xs-4 ">
                        <i class="far fa-comments"></i> 456
                    </div>
                    <div class="col col-xs-4 ">
                        <i class="far fa-heart"></i> 2.4k
                    </div>
                    <div class="col col-xs-4">
                        <i class="fas fa-share"></i> 99
                    </div>
                </div>
            </div>
        </div></div>`
        })
    
    document.querySelector(".post").innerHTML=temp;
    }


    document.getElementById("frm").addEventListener("submit",formData)