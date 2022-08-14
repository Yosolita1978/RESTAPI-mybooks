//This function load your books from your backend into the FrontEnd. It must do another GEt request. 

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:5000/api/books", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for (let book of books) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                        <div>Author: ${book.author}</div> 
                        <div>Format: ${book.format}</div>       
                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();
