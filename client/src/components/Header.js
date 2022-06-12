import React from "react";

function Header() {

  const mystyle = {
    color: "black",
    backgroundColor: "white",
    fontsize: "50px",
    padding: "10px",
    fontFamily: "Arial",
    textalign: "center"
  };

  return (
    <div style={mystyle} class="container">
      <h1>
        Student Manager
      </h1>
    </div>
  );
}

export default Header;
