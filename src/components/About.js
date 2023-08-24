import { Component } from "react";
// import "../App.css";
import Photo from "./Hunter.png";
import "./About.scss";
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
            <h2>The Process</h2>
            <p>
              Wow oh wow was this a learning experiance for me!!! This project
              has been such a struggle for me. I learned very quickley that if I
              focused on what I didn't know what to do then I would get stuck
              and frustrated very quickly. So that is what I did. I knew that I
              could make different routes and style them out. I started with the
              footer and Navbar because those were pretty simple to do. The
              about and contact page were also very fun for me! The struggle
              came with the products page and the cart page. I spent more time
              on those then everything else combined. The api calling wasn't too
              difficult to figure out but the sorting killed me. I will go into
              that more later. I also was soooo close to finishing my cart page
              got stuck and thought I could reset but didn't back up stuff to
              get hub before I did. Which ended in me losing about two days
              worth of work. Am I happy with what I have learned yes! Do I wish
              I had more time to have completed this yes! but I gave it my best
              shot and I exited to see what more I can learn in the future.
            </p>
          </div>
          <div className="well">
            <h2>Stuggles of the Front End Course</h2>
            <p>
              The Front End Course has been very difficult for me. Trying to
              balance work and school has been one of the hardest things i've
              ever done. I would were myself out at work and jump into class
              brain dead and try my best to focus. It also was very hard when we
              exchanged teacher half way through. I don't feel like I was able
              to get back into the groove I was in once that happened. I really
              enjoyed time spent in HTML and CSS though. It was a lot of fun to
              learn about stylings.
            </p>
          </div>
          <div className="favorite">
            <h2>Favotire Language</h2>
            <p>
              Sass is my favorite lang. I like making stuff look good. You see
              imediate result which is cool and it is what makes the whole
              prodject come together in the end.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
