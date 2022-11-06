import "./CoolButton.scss";

const CoolButton = ({ className, children, ...restProps }) => {
  let buttonClassName = "cool-button";
  if (className) buttonClassName += " " + className;
  return (
    <button className={buttonClassName} {...restProps}>
      <div className="cool-button--top-right-angle">
        <div className="cool-button--bottom-left-angle">
          <div className="cool-button--top-and-bottom-borders">
            <div className="cool-button--left-and-right-borders">
              <div className="cool-button--content">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CoolButton;
