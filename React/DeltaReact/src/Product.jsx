import PropTypes from "prop-types";
import "./Product.css";

function Product({ title, description, features, features2 }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>{description}</h5>
      <p>{features}</p>
      {/* Or by using map functions...mapping features to <li> */}
      {/* {features.map((feature) => (
        <li>{feature}</li>
        ))} */}

      <p>{features2}</p>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.array.isREquired,
  features2: PropTypes.object.isREquired,
};

export default Product;
