import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Mapping the links to create <a> elements
  const linkElements = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));

  // Returning the navigation bar with the mapped links
  return <nav>{linkElements}</nav>;
}

export default NavBar;
