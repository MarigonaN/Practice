import React, { Component } from 'react';
import { Card } from 'react-bootstrap'


class BookListItem extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.bookInfo.img} />
            <Card.Body>
        <Card.Title>{this.props.bookInfo.Title}</Card.Title>
              <Card.Text>
            {this.props.bookInfo.category} - {this.props.bookInfo.price} $ 
              </Card.Text>
            
            </Card.Body>
          </Card>
        );
    }
}

export default BookListItem;