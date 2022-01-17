import { FC } from "react";

import { DesktopNav, MobileNav } from "./index.styled";
const NavPadding: FC = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default NavPadding;
