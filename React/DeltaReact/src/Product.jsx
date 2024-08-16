import PropTypes from "prop-types";
import "./Product.css";

function Product({ title, description }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
