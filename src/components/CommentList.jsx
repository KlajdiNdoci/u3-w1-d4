import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments, rate }) {
  return (
    <ListGroup className="mb-3">
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} rate={rate} />
      ))}
    </ListGroup>
  );
}

export default CommentList;
