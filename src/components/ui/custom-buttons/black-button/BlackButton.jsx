import "../black-button/BlackButton.css";

export const BlackButton = ({children, variant = "black" }) => {
  return (
    <button className={`custom-btn ${variant}`} >{children}</button>
  );
};
