import React, { Component } from "react";
import "./Styles/Contact.scss";
import "./media/pink.jpeg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;

    return (
      <div className="mainWrapper1">
        <h1>
          This Page is for you to complain and for us to never reach back out
          even though we say we will do so shortly!
        </h1>
        <br />
        <div className="box">
          <label htmlFor="fname">
            <h3>First Name:</h3>
          </label>
          <input
            type="text"
            id="fname"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="lname">
            <h3>Last Name:</h3>
          </label>
          <input
            type="text"
            id="lname"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="email">
            <h3>Email:</h3>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="message">
            <h3>Concerns/Message us:</h3>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={this.handleInputChange}
          ></textarea>
          <br />
          <button onClick={this.togglePopup}>Submit</button>
        </div>

        {this.state.showPopup && (
          <div className="popup">
            <h2>Your request has been submitted!</h2>
            <button onClick={this.togglePopup}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
