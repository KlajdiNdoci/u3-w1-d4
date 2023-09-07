import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments, rate }) {
  console.log(rate);
  return (
    <ListGroup>
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} />
      ))}
    </ListGroup>
  );
}

export default CommentList;
