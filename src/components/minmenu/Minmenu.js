import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";

const Minmenu = () => {
  return (
    <>
      <div className="min-c">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/" className="j-btn">
              Join
            </a>
          </li>
          <li className="socials">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Minmenu;
