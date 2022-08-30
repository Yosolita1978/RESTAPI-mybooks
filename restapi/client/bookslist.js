//This function load your books from your backend into the FrontEnd. It must do another GEt request. 

async function loadBooks(){
    const URL = "http://localhost:5000/api/books";
    const response = await fetch(URL);
    const responseBooks = await response.json();
    for (let book of responseBooks){
        const tempCard = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                <div>Author: ${book.author}</div> 
                <div>Format: ${book.format}</div>
                <hr>
                </div>
            </div>
        </div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
    }
}

loadBooks();
