import React from "react";
import Type from "./Type";
import Container from "../../../shared/helpers/Container";
import ActiveFilter from "./ActiveFilter";

const Filters = () => {
  return (
    <Container>
      <div className="mt-20 flex">
        <Type />
        <ActiveFilter />
      </div>
   
    </Container>
  );
};

export default Filters;
