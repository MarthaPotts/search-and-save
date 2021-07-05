const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const bookSchema = new Schema({
    authors: {}, 
    description: {}, 
    image: {}, 
    link: {}, 
    title: {},
    date: {type: Date, default: Date.now}
}); 

const Book = mongoose.model("Book", bookSchema); 

module.exports = Book; 