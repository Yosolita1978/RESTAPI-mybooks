import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import books from './books.js';
import pretty from 'express-prettify';

const app = express();
const PORT = 5000;

// to let the server know what directory are we working on 
const __dirname = path.resolve();

// Configuring cors middleware
app.use(cors());

// Configuring express-prettify middleware for working with JSON
app.use(pretty({ query: 'pretty' }));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to render static files from the client folder
app.use(express.static('client'));


// //creates an endpoint for the route `/api/books` that prints all the books 
app.get("/api/books", (req, res) => {
    res.json(books);
  });

//creates a route `/` that is the homepage
app.get('/', (req, res) =>{
  //testing that was working
  //res.send("Hello Techtonica, welcome to Cristina's Library");
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
  //this send the response to open the index.html in that directory
}); 


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));