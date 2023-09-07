import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    addingComment: "",
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>New comment</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Enter comment" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;
