import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Home/Home.css";

// list of items
const list = [
  { name: "HOME", target: "" },
  { name: "ONEZERO" },
  { name: "ELEMENTAL" },
  { name: "GEN" },
  { name: "ZORA" },
  { name: "FORGE" },
  { name: "HUMAN PARTS" },
  { name: "MARKER" },
  { name: "LEVEL" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, target, selected }) => {
  return (
    <div className="">
      <Link to={target} style={{ textDecoration: "none" }}>
        <Button style={{ color: "#000" }}>{text}</Button>
      </Link>
    </div>
  );
};

// const MenuItem = ({ text, target, selected }) => {
//   return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
// };

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

class Categorybar extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Categorybar;
