import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };

  handleBookClick = () => {
    this.setState({ selectedBook: !this.state.selectedBook });
  };
  render() {
    const { book } = this.props;
    const bookColor = this.state.selectedBook ? "selected-book" : "";
    return (
      <Col md={3} className="mb-3">
        <Card className={bookColor}>
          <Card.Img className="object-fit-contain" src={book.img} height={400} onClick={this.handleBookClick} />
          <Card.Body>
            <Card.Title className="text-truncate">{book.title}</Card.Title>
            <Card.Text>{`Price: ${book.price}€`}</Card.Text>
          </Card.Body>
          {this.state.selectedBook && <CommentArea book={book} />}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
