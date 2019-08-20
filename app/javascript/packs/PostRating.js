// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './styles/post-rating'

function RatingButton(props) {
  return (
    <button name="rating" value={props.value} onClick={props.onClick}>{props.value}</button>
  );
}

function PositiveFeedbackForm(props) {
  return (
    <div className="feedback-form">
      <h4>Why did you enjoy this article?</h4>
      <textarea value={props.comments} className="feedback-text" onInput={props.onInput}></textarea>
    </div>
  );
}

function NegativeFeedbackForm(props) {
  return (
    <div className="feedback-form">
      <h4>What could this article have done better?</h4>
      <textarea value={props.comments} className="feedback-text" onInput={props.onInput}></textarea>
    </div>
  );
}

function AverageFeedbackForm(props) {
  return (
    <div className="feedback-form">
      <h4>What about this article seems bland?</h4>
      <textarea value={props.comments} className="feedback-text" onInput={props.onInput}></textarea>
    </div>
  );
}

class PostRating extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rating: "",
      additionalComments: ""
    };
    this.setRating = this.setRating.bind(this);
    this.captureFeedback = this.captureFeedback.bind(this);
  };

  setRating(event) {
    this.setState(
      { 
        rating: event.target.value,
        additionalComments: ""
      }
    );
    console.log(this.state);
  };

  captureFeedback(event) {
    this.setState({additionalComments: event.target.value});
  }

  handleSubmit(event) {
    console.log("Review Sent")
    event.preventDefault();
  }
  
  render() {
    let feedbackForm;
    const rating = this.state.rating;

    if (["1", "2"].includes(rating)){
      feedbackForm = <NegativeFeedbackForm comments={this.state.additionalComments} onInput={this.captureFeedback}/>;
    } else if (rating === "3") {
      feedbackForm = <AverageFeedbackForm comments={this.state.additionalComments} onInput={this.captureFeedback}/>;
    } else if (["4", "5"].includes(rating)) {
      feedbackForm = <PositiveFeedbackForm comments={this.state.additionalComments} onInput={this.captureFeedback}/>;
    }

    return(
      <div>
        <div className="rating-form">
          <h3>So, what'd you think of this post?</h3>
          <div className="input-group">
            <label>Rate it on a scale of 1 to 5</label><br />
            <RatingButton value="1" onClick={this.setRating} />
            <RatingButton value="2" onClick={this.setRating} />
            <RatingButton value="3" onClick={this.setRating} />
            <RatingButton value="4" onClick={this.setRating} />
            <RatingButton value="5" onClick={this.setRating} />
          </div>
        </div>
        <div className="feedback-form">
          {feedbackForm}
        </div>
        <button onClick={this.handleSubmit}>Send Feedback</button>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PostRating email="" rating="3" />,
    document.getElementById('react-comment-section'),
  )
})