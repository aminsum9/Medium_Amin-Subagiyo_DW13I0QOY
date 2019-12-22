import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Mobile from "./Category/Mobile";
import "./Home/Home.css";

// list of items
const list = [
  {
    name: "HOME",
    target: "/Mobile"
  },
  {
    name: "ONE ZERO",
    target: "/Mobile"
  },
  {
    name: "PROGRAMMING",
    target: "/Mobile"
  },
  {
    name: "ANDROID",
    target: "/Mobile"
  },
  {
    name: "OTOMOTIF",
    target: "/Mobile"
  },

  {
    name: "ELECTRONIC",
    target: "/Mobile"
  },
  {
    name: "CHEMISTRY",
    target: "/Mobile"
  }
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

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return (
      <MenuItem text={name} target={el.target} key={name} selected={selected} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = () => {
  return console.log("tes");
};

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
