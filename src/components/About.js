import { Component } from "react";
// import "../App.css";
import Photo from "./Hunter.png";
import "./About.css";
import "./pink.jpeg";

class About extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="mainWrapper2">
        <div className="image">
          <img src={Photo} alt="My Image" />
        </div>
        <div className="words">
          <div className="Auth">
            <h1>About The Creator Hunter McCurdy</h1>
          </div>
          <div className="suck">
            <h2>What Sucked</h2>
            <p>
              I love styling but I really did not like styling this assignment.
              It was so hard for me to figure out how and where everything was
              nested.
            </p>
          </div>
          <div className="well">
            <h2>What Went Well</h2>
            <p>
              My favorite part of this whole assigment was talking to people
              while getting help. when I was striggling on stuff matt cawldwell
              helped keep me motivated but also gave me new ideas to try.
            </p>
          </div>
          <div className="favorite">
            <h2>Favotire Language</h2>
            <p>
              Scss is my favorite lang. I like making stuff look good. You see
              imediate result which is cool and it is what makes the whole
              prodject come together and look good.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
