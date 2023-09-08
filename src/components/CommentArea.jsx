import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    commentsWithRate: [],
    asin: this.props.book.asin,
  };
  fetchComments = async () => {
    const elementId = this.props.book.asin;
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementId, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTNlZGMwMzRmZjAwMTQwM2Y0ZDYiLCJpYXQiOjE2OTQxNTQ2NDgsImV4cCI6MTY5NTM2NDI0OH0.5gepNiVnuLWo2L0s87jHnQ7cjSPAOd5NlVPXM9Qge5I",
        },
      });

      if (!response.ok) {
        throw new Error("Non è stato possibile recuperare i commenti");
      }

      const commentData = await response.json();

      if (commentData && commentData.comment && commentData.rate) {
        const commentWithRateData = {
          comment: commentData.comment,
          rate: commentData.rate,
        };

        this.setState({
          commentsWithRate: [commentWithRateData],
        });
      } else {
        throw new Error("La risposta non contiene un commento valido");
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
        <AddComment asin={this.state.asin} />
      </>
    );
  }
}

export default CommentArea;
