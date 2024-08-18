import PropTypes from "prop-types";
import "./Product.css";

function Product({ title, description, features, features2, price }) {
  let styles = { backgroundColor: price > 20000 ? "pink" : null };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <p>{features}</p>
      {/* Or by using map functions...mapping features to <li> */}
      {/* {features.map((feature) => (
        <li>{feature}</li>
        ))} */}

      <p>{features2}</p>
      <h3>{price}</h3>
      {price > 20000 ? <p> 5% Discount </p> : null}
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  features2: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
