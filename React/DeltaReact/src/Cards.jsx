import Card from "./Card";
import "./Cards.css";

function doSomething(event) {
  console.log("button was clicked");
  console.log(event);
}

function hover() {
  console.log("hovered over button");
}

function Cards() {
  return (
    <>
      <div className="mainContainer">
        <Card name="pen" price="5" />
        <Card name="copy" price="10" />
        <Card name="eraser" price="10" />
        <Card name="hotspot" price="10" />
        <Card name="ball" price="10" />
        <Card name="roller" price="10" />
      </div>
      <button onClick={doSomething} onMouseOver={hover}>
        Click Me!!
      </button>
    </>
  );
}

export default Cards;
