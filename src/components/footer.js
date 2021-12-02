import React from "react";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p>Ignacio Jimenez ® {year}</p>
    </footer>
  );
}
