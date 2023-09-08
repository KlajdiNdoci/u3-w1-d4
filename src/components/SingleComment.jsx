import { Badge, ListGroup } from "react-bootstrap";

function SingleComment({ comment }) {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span className="pe-2">{comment.comment}</span>
        <div>
          <Badge bg="secondary" className="flex-grow-0">
            {comment.rate}
          </Badge>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
