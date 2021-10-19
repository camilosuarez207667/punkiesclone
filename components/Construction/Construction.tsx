import { useEffect, useState, FC } from "react";

import { Background, Column } from "./construction.styled";

const Construction: FC = () => {
  return (
    <>
      <Background>
        <Column>one</Column>
        <Column>two</Column>
        {/* <p>En Construcci&oacute;n</p> */}
      </Background>
    </>
  );
};
export default Construction;
