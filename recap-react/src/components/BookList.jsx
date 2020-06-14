
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class BookList extends Component {
    state = {
        books: []
    }
    render() {
        return (<>
            <Row>
                <h1>{this.props.text}</h1>
            </Row>
            <Row>
            {this.state.books.map(book =>
             <img src={book.img} style={{width: "200px"}} />)}
            </Row>
            </>
        );
    }
    componentDidMount = async () => {
        const response = await fetch("https://striveschool.herokuapp.com/books?offset=0&limit=50")
        if(response.ok){
            const books = await response.json() 
            this.setState({
                books: books
            })
        }
    }
}

export default BookList;