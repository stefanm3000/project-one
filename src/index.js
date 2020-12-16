import React from "react";
import { render } from "react-dom";

function Greeting() {
  return (
    <div>
      Hello broskerinos
    </div>
  )
}

export default Greeting


render(<Greeting />, document.getElementById("root"));
