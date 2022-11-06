import { Link } from "react-router-dom";
import "./LogoContainer.scss";

const LogoContainer = ({ children }) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <div className="logo-sub-container">{children}</div>
      </Link>
    </div>
  );
};

export default LogoContainer;
