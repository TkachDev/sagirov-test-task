import LogoContainer from "../components/LogoContainer";
import NavBar from "../components/NavBar";
import "./Header.scss";

const links = [
  {
    href: "/",
    label: "Главная",
  },
  {
    href: "/",
    label: "Технология",
  },
  {
    href: "/",
    label: "График полетов",
  },
  {
    href: "/",
    label: "Гарантии",
  },
  {
    href: "/",
    label: "О компании",
  },
  {
    href: "/",
    label: "Контакты",
  },
];

const Header = () => {
  return (
    <header className="App-header">
      <div className="App-header--content-container">
        <LogoContainer>
          <img
            className="spacex-logo"
            src="/spacex.svg"
            alt="logo"
            width="250px"
          />
        </LogoContainer>

        <NavBar links={links} />
      </div>
    </header>
  );
};

export default Header;
