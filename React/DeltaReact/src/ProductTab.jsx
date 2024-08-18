import Product from "./Product";

function ProductTab() {
  let features = [
    <li key="1">hitech</li>,
    <li key="2">hitech</li>,
    <li key="3">hitech</li>,
  ];
  let features2 = { a: "hitech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="pen"
        description="THis is the pen"
        features={features}
        features2={features2.a}
        price={2000}
      />
      <Product
        title="book"
        description="THis is the book"
        features={features}
        features2={features2.b}
        price={20000}
      />
      <Product
        title="copy"
        description="THis is the copy"
        features={features}
        features2={features2.c}
        price={22000}
      />
    </>
  );
}

export default ProductTab;
