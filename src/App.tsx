import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">hello loujain</div>
      <button>Login</button>
      <p>lets start our project </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae
        dignissimos officiis aspernatur odit saepe adipisci similique quo soluta
        temporibus dolores vero dolorem eius at, ipsam cupiditate aperiam earum
        eum?{" "}
      </p>
    </>
  );
}

export default App;
