import React, { memo } from "react";
import { Container } from "./style";
export const Navbar = (props) => {
  console.log("Navbar render");
  return (
    <Container>
      <h3>{props.data.title}</h3>
      <h3>About</h3>
      <h3>Contact</h3>
      <h3>Work</h3>
    </Container>
  );
};
export default memo(Navbar);
