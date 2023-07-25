import { Component } from "react";

class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = (e) => {

        if (e.target.innerText === "Good") {
            this.setState(prevState => ({
                good: prevState.good + 1
            }));
        };

        if (e.target.innerText === "Neutral") {
            this.setState(prevState => ({
                neutral: prevState.neutral + 1
            }));
        };

        if (e.target.innerText === "Bad") {
            this.setState(prevState => ({
                bad: prevState.bad + 1
            }));
        };
    };

    countTotalFeedback () {
        return (this.state.good + this.state.neutral + this.state.bad)
    };

    countPositiveFeedbackPercentage() {
        if(!this.state.good) {return}
        return ((this.state.good / this.countTotalFeedback ()) * 100)
    }

    render() {
      
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const 

      return (<div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrement}>Good</button>
          <button type="button" onClick={this.handleIncrement}>Neutral</button>
          <button type="button" onClick={this.handleIncrement}>Bad</button>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage() }%</p>
      </div>
        
    );
    };
};

export default Feedback;