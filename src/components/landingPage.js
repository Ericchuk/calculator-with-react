import Button from "./buttons";
import Screen from "./screen";
import Header from "./header";
import { useState } from "react";

function LandingPage() {
  const [screen, setScreen] = useState(""); // screen is the state and setScreen is the function that updates the state
  const operators = ["C", "+", "-", "*", "/", "."];
  function handleClick(e) {
    if (e.target.innerText === "C") {
      setScreen(""); // setScreen is the function that updates the state
    } else if (e.target.innerText === "=") {
      setScreen(eval(screen));
      // eval is a function that evaluates the string as a javascript code
    }else if (e.target.innerText === "DEL") {
      setScreen(screen.slice(0, -1));
       // slice is a function that returns a part of the string, this removes the last character
    }
     else if (
      (operators.includes(e.target.innerText) && screen === "") || // if the screen is empty and the user clicks on an operator return
      (operators.includes(e.target.innerText) &&
        operators.includes(screen.slice(-1))) // if the last character on the screen is an operator and the user clicks on an operator return
    ) {
      return;
    }
     else {
      setScreen(screen + e.target.innerText); // if the user clicks on a number or an operator add it to the screen
    }
  }

  return (
    <section className="landing">
      <Header />
      <Screen screen={screen} />
      <Button click={handleClick} operators={operators} />
    </section>
  );
}

export default LandingPage;