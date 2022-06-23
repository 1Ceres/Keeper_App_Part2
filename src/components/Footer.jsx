import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ AlkoWebDeveloper {year}</p>
    </footer>
  );
}

export default Footer;
