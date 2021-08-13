

var Books=function(id,title,price,author){
    this.id=id;
    this.title=title;
    this.price=price;
    this.author=author;
}

var books=new Array();

function AddBook(){
    var title=_("title").value;
    var price=_("price").value;
    var author=_("author").value;
    var id=books.length+1;
    var book=new Books(id,title,price,author);
    books.push(book);
    BindBook(books)
    _("frm").reset()

}

function BindBook(books){

    var temp=``
    books.forEach(function(book,index){
        temp+=`<tr><td>${book.id}</td><td>${book.title}</td><td>${book.price}</td><td>${book.author}</td><td><a><i class="fa fa-edit"></i></a><a onclick=DeleteBook(${index})><i class="fa fa-trash"></i></a></td></tr>`
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

_("btn_add").addEventListener("click", AddBook);












