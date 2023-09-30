import "./index.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
  const { isPortfolioClicked, isContactClicked } = props;

  const scrollToPortfolio = () => {
    isPortfolioClicked();
  };

  const scrollToContact = () => {
    isContactClicked();
  };

  const handleCheckboxChange = (e) => {
    const navbarList = document.querySelector(".navbar-list");
    if (e.target.checked) {
      navbarList.classList.add("checked");
    } else {
      navbarList.classList.remove("checked");
    }
  };

  const hideNavbarList = () => {
    const navbarList = document.querySelector(".navbar-list");
    navbarList.classList.remove("checked");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src="./0.jpg" alt="logo" className="logo"/>
      </Link>
      <ul className="navbar-list">
        <Link to="/" className="nav-link">
          <li onClick={hideNavbarList}>HOME</li>
        </Link>
        <li
          onClick={() => {
            scrollToPortfolio();
            hideNavbarList();
          }}
        >
          ABOUT US
        </li>
        <li
          onClick={() => {
            scrollToContact();
            hideNavbarList();
          }}
        >
          OUR WORK
        </li>
        <li
          onClick={() => {
            scrollToContact();
            hideNavbarList();
          }}
        >
          SERVICES
        </li>
        <li
          onClick={() => {
            scrollToContact();
            hideNavbarList();
          }}
        >
          CONTACT US
        </li>
        
      </ul>
      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu />
      </label>
    </nav>
  );
};

export default Header;