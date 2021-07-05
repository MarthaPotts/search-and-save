import axios from "axios";

export default {
  //gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  //gets book with given id
  getBook: function () {
    return axios.get("/api/books/" + id);
  },
  //deletes book with given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  //saves book to db
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
