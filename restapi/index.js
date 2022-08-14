import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import books from './books.js';
import pretty from 'express-prettify';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring express-prettify middleware for working with JSON
app.use(pretty({ query: 'pretty' }));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//creates an endpoint for the route `/` that is the homepage
app.get('/', (req, res) =>{
    //console.log("[PRUEBA]!");
    res.send("Hello Techtonica, welcome to Cristina's Library");
}); 


// //creates an endpoint for the route `/api/books` that prints all the books 
app.get("/api/books", (req, res) => {
    res.json(books);
  });


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));