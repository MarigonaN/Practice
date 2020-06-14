import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'


class BookListItem extends Component {
    render() {
        return (
            <Row>
                <Col >
            <Card style={{ width: '200px', height: "250px", display: "flex", margin: " -5px", marginTop: "30px"}}>
            <Card.Img variant="top" src={this.props.bookInfo.img} />
            <Card.Body>
        <Card.Title>{this.props.bookInfo.Title}</Card.Title>
              <Card.Text>
            {this.props.bookInfo.category} - {this.props.bookInfo.price} $ 
              </Card.Text>
            
            </Card.Body>
          </Card>
          </Col>
          </Row>
        );
    }
}

export default BookListItem;