import React, { Component } from "react";
import "../App.scss";
import "./Contact.scss";
import "./pink.jpeg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  };

  render() {
    const { users } = this.props;

    return (
      <div className="mainWrapper1">
        <h1>
          This Page is for you to complain and for us to never reach back out
          even though we say we will do so shortly!
        </h1>
        <br />
        <label htmlFor="fname">
          <h3>First Name:</h3>
        </label>
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">
          <h3>Last Name:</h3>
        </label>
        <input type="text" id="lname" name="lname" />
        <br />
        <label htmlFor="email">
          <h3>Email:</h3>
        </label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="message">
          <h3>Concerns/Message us:</h3>
        </label>
        <textarea name="Complaints" id="email" cols="30" rows="10"></textarea>
        <br />
        <button onClick={this.togglePopup}>Submit</button>

        {this.state.showPopup && (
          <div className="popup">
            <h2>Your request has been sumbited!</h2>
            <button onClick={this.togglePopup}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
