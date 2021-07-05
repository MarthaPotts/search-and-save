import React, { useEffect, useState } from 'react'; 
import Jumbotron from '../components/Jumbotron'; 
import DeleteBtn from '../components/DeleteBtn'; 
import API from '../utils/API'; 
import  { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List'; 
import { Input, TextArea, FormBtn } from '../components/Form'; 

function Books() {
    //set initial state 
    const [books, setBooks] = useState([]); 
    const [formObject, setFormObject] = useState({
        // authors: "", 
        // description: "", 
        // image: "", 
        // link: "", 
        title: "",
        author: "",  
        synopsis: ""
    }); 
    //load all books and store them with setBooks
    useEffect( () => {
        loadBooks(); 
    }, []); 
    //load all books and set them to books 
    function loadBooks() {
        API.getBooks().then(res => setBooks(res.data)).catch(err => console.log(err)); 
    }; 
    //deletes a book from db with given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id).then(res => loadBooks()).catch(err => console.log(err)); 
    }; 
    //handles updating comp state when user types into input field
    function handleInputChange(event) {
        const { name, value } = event.target; 
        setFormObject({...formObject, [name]: value});
    }; 
    //when form submits use API.saveBook method to save book data, reload books from db
    function handleFormSubmit(event) {
        event.preventDefault(); 
        if (formObject.title && formObject.author) {
            API.saveBook({
                // authors: formObject.author, 
                // description: formObject.description, 
                // image: formObject.image, 
                // link: formObject.link, 
                title: formObject.title,
                author: formObject.author, 
                synopsis: formObject.synopsis
            })
            .then( () => setFormObject({
                // authors: "", 
                // description: "", 
                // image: "", 
                // link: "", 
                title: "",
                author: "", 
                synopsis: ""
            }))
            .then( () => loadBooks())
            .catch(err => console.log(err)); 
        }
    }; 
    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onchange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                            value={formObject.title}
                            />
                            <TextArea
                            onchange={handleInputChange}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                            value={formObject.synopsis}
                            />
                            <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                            >
                                Submit Book
                            </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ? ( 
                        <List>
                            {books.map(book => {
                                return(
                                    <ListItem key={book._id}>
                                        <a href={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </a>
                                        <DeleteBtn onClick={ () => deleteBook(book._id)}/>
                                    </ListItem>
                                ); 
                            })}
                        </List>
                    ) : (
                        <h3>No results to display</h3>
                    )}
                </Col>
            </Row>
        </Container>
    ); 
}

export default Books; 