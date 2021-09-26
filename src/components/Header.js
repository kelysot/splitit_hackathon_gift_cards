import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";

const Header = ({  }) => {
  const location = useLocation();
  const history = useHistory();

  const linkBack = () => {
    history.push("/home");
  };
  return (
    <header className="header centered digiteam-label">
     DIGITEAM GIFTCARD
    </header>
  );
};

export default Header;
