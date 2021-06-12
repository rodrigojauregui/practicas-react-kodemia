import React, { useState, useEffect } from "react";
import "./appThemeToggle.css";

/*
class AppThemeToggle extends React.Component {
  constructor(props) {
    super(props);
    // una solucion para el scope
    // this.toggle = this.toggle.bind(this)

    this.state = { theme: "light" };
  }

  toggle(event) {
    console.log(event);
    const theme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme });
  }
  //otra solucion es con una funcion flecha que no tiene scope

  render() {
    return (
      <div
        className={`appThemeToggle d-flex ${this.state.theme}`}
        onClick={this.toggle.bind(this)}
      ></div>
    );
  }

  componentDidMount() {
    document.body.setAttribute("theme", this.state.theme);
  }

  componentDidUpdate() {
    document.body.setAttribute("theme", this.state.theme);
  }
}
*/

function AppThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  function toggle() {
    const isTheme = theme === "light" ? "dark" : "light";
    setTheme(isTheme);
  }

  return (
    <div className={`appThemeToggle d-flex ${theme}`} onClick={toggle}></div>
  );
}

export default AppThemeToggle;
