

var Books=function(id,title,price,author){
    this.id=id;
    this.title=title;
    this.price=price;
    this.author=author;
}

var books=new Array();
var b1=new Books(1,"angular",500,"ramesh")
var b2=new Books(2,"React js",700,"Ajit verma")
var b3=new Books(3,"Node js",590,"Shreya")
books.push(b1)
books.push(b2)
books.push(b3)

function AddBook(){
    var title=_("title").value;
    var price=_("price").value;
    var author=_("author").value;
    var index=_("index").value;
    var id=books.length+1;
   // console.log(index)
    if(index=="")
    {
    var book=new Books(id,title,price,author);
    books.push(book);
    }
    else{
        var book=new Books(index,title,price,author)
        books.splice(index-1,1,book)
    }
    BindBook(books)
    _("frm").reset()

}



function BindBook(books){

    var temp=``
    books.forEach(function(book,index){
        temp+=`<tr><td>${book.id}</td><td>${book.title}</td><td>${book.price}</td><td>${book.author}</td><td><a onclick="editBook(${index})"><i class="fa fa-edit"></i></a><a onclick=DeleteBook(${index})><i class="fa fa-trash"></i></a></td></tr>`
    })
    var tbl=_("tbl");
    
    
    tbl.children[1].innerHTML=temp;
}

function _(ele_id){
    return document.getElementById(ele_id)
}

function DeleteBook(index){
    if(confirm("Are you sure to delete this book ?"))
    {
    books.splice(index,1);
    BindBook(books)
    }
}

function editBook(index)
{
    var book=books[index]

    _("title").value=book.title;
    _("price").value=book.price;
   _("author").value=book.author;
   _("index").value=book.id;

    //console.log(book)
}
_("btn_add").addEventListener("click", AddBook);






//BindBook(books)

window.addEventListener("load",function(){
    BindBook(books)
})


_("txt_search").addEventListener("keyup",function(){
    var txt=this.value
    var result=books.filter(function(book){
        if(JSON.stringify(book).includes(txt)){
            return book;
        }
    })
    
    BindBook(result)
})


