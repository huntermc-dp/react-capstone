import { NavLink } from "react-router-dom";
import "./Styles/footer.scss";
import "./media/pink.jpeg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="number">PHONE NUMBER: (435)322-0322</div>
      <div className="adress">LOCATION: 123w 123s Provo UT</div>
      <div className="socialMedia">SOCIAL MEDIA: Hunter_McCurdy</div>
    </div>
  );
}
