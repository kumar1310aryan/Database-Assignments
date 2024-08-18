import PropTypes from "prop-types";
import "./Msgbox.css";

function Msgbox({ name, textColor }) {
  let fontcolour = { color: textColor };
  return (
    <>
      <div className="name" style={fontcolour}>
        <h1>Hello {name}</h1>
      </div>
    </>
  );
}

Msgbox.propTypes = {
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Msgbox;
