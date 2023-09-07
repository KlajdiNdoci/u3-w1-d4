import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchedBook: "",
  };

  handleChange = event => {
    this.setState({ searchedBook: event.target.value });
  };

  render() {
    const { books } = this.props;
    const FilteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(this.state.searchedBook.toLowerCase())
    );
    return (
      <Container>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Cerca libri per titolo..."
          value={this.state.searchedBook}
          onChange={this.handleChange}
        />
        <Row>
          {FilteredBooks.map(book => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
