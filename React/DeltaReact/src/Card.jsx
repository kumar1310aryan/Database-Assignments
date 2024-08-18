import "./Card.css";
import PropTypes from "prop-types";
function Card({ name, price }) {
  return (
    <>
      <div className="card">
        <div className="heading">
          <h3>{name}</h3>
        </div>
        <hr />
        <div className="image"></div>
        <div className="price">
          <p>{price}$</p>
        </div>
        <div className="description">This is the product description</div>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
