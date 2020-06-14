
import React, { Component } from 'react';
import { Row, FormControl } from 'react-bootstrap';
import BookListItem from "./BookListItem"

class BookList extends Component {
    state = {
        books: [],
        search: ""
    }
    render() {
        return (<>
            <Row>
                <h1>{this.props.text}</h1>
                <FormControl
      placeholder="Search"
      value={this.state.value}
      onChange={(e) => this.setState({ search: e.currentTarget.value.toLowerCase() })}
      
        />
            </Row>
            <Row>
            {this.state.books
            .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
            .map(book =>
             <BookListItem key={book.asin} bookInfo={book} />)}
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