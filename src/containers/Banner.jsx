import "./Banner.scss";
import CoolButton from "../components/CoolButton";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner--content-container">
        <div className="banner--content-container--left-column">
          <h1 className="banner--content-container--left-column--tittle">
            <span>ПУТЕШЕСТВИЕ</span>{" "}
            <span className="banner--content-container--left-column--tittle--second-line">
              на крассную планету
            </span>
          </h1>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="banner--cool-button-container"
          >
            <CoolButton className="banner--cool-button">Начать путешествие</CoolButton>
          </a>
        </div>

        <div className="banner--content-container--right-column">
          <div className="banner--content-container--right-column--cell">
            <span>мы</span>
            <span className="banner--content-container--right-column--cell--second-line">
              1
            </span>
            <span>на рынке</span>
          </div>

          <div className="banner--content-container--right-column--cell">
            <span>гарантируем</span>
            <span className="banner--content-container--right-column--cell--second-line">
              50%
            </span>
            <span>безопасность</span>
          </div>

          <div className="banner--content-container--right-column--cell">
            <span>календарик за</span>
            <span className="banner--content-container--right-column--cell--second-line">
              2001<span className="little-thing">г.</span>
            </span>
            <span>в подарок</span>
          </div>

          <div className="banner--content-container--right-column--cell">
            <span>путешествие</span>
            <span className="banner--content-container--right-column--cell--second-line">
              597
            </span>
            <span>дней</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
