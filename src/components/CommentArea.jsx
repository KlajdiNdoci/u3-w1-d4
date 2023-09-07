import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    commentsWithRate: [],
  };
  fetchComments = async () => {
    const elementId = this.props.book.asin;
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementId, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTNlZGMwMzRmZjAwMTQwM2Y0ZDYiLCJpYXQiOjE2OTQwOTA4OTAsImV4cCI6MTY5NTMwMDQ5MH0.0QZCufRskLujb0pWmIhjTjJDmIdZhir-6fJ-6lllhTo",
        },
      });
      const bookArray = await response.json();
      const commentsWithRateData = bookArray.map(book => ({
        comment: book.comment,
        rate: book.rate,
      }));
      console.log(this.state.comments);

      if (response.ok) {
        this.setState({
          commentsWithRate: commentsWithRateData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        <CommentList comments={this.state.commentsWithRate} />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
