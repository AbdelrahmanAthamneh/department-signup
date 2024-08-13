import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Tab({ onSelect, to, text, isSelected }) {
  return (
    <li onClick={onSelect}>
      <Link id={text} className={classes["navigation-tab"]} to={to}>
        {text}
      </Link>
      {isSelected && (
        <motion.div layoutId="underline" className={classes.underline} />
      )}
    </li>
  );
}
export default function Navigation() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("Home");

  function handleClick(e) {
    setCurrentSelectedTab(e.target.id);
  }

  return (
    <nav className={classes.navigation}>
      <ul className={classes["navigation-tabs"]}>
        <Tab
          onSelect={(e) => handleClick(e)}
          isSelected={currentSelectedTab === "Home"}
          to="/"
          text="Home"
        />
        <Tab
          onSelect={(e) => handleClick(e)}
          isSelected={currentSelectedTab === "Departments"}
          to="/departments"
          text="Departments"
        />
      </ul>
    </nav>
  );
}
