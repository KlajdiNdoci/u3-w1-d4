import React, { Component } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
      selectedRateText: "Select rating",
    },
  };

  handleDropdownSelect = (eventKey, event) => {
    const rateValue = parseInt(eventKey, 10);
    const rateText = event.target.textContent;

    this.setState({
      comment: {
        ...this.state.comment,
        rate: rateValue,
        selectedRateText: rateText,
      },
    });
  };

  addComment = async event => {
    event.preventDefault();

    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTNlZGMwMzRmZjAwMTQwM2Y0ZDYiLCJpYXQiOjE2OTQxMDI2NjIsImV4cCI6MTY5NTMxMjI2Mn0.Mk0t8rb1719rIOPh1DMVaKkIsaA2B_zRun6l4snnTqU",
          "Content-Type": "application/json", // Aggiunto il tipo di contenuto
        },
        body: JSON.stringify(this.state.comment), // Invia solo il commento dallo stato
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form style={{ border: "1px solid red" }} onSubmit={this.addComment}>
        <Form.Group className="mb-3">
          <Form.Label>New comment</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter comment"
            onChange={event =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: event.target.value,
                },
              })
            }
            required
          />
          <Dropdown onSelect={this.handleDropdownSelect} className="mb-3" required>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {this.state.comment.selectedRateText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;
