import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Link = (props) => {
  return <div className="py-2 md:py-0 md:px-2 text-[#503B40]">{props.label}</div>;
};

const Navbar = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <>
      <div className="sticky-top absolute top-0 left-0 right-0 p-4 bg-[#DFD9CC] drop-shadow-md">
        <div className="flex justify-between">
          <span className="text-[#503B40] font-['Playfair_Display'] cursor-pointer">✦ Good Day!</span>
          <div className="cursor-pointer hidden md:flex text-[#503B40]">
            <Link label="Home" />
            <Link label="About" />
            <Link label="Skills" />
            <Link label="Project" />
            <Link label="Contact" />
          </div>
          <div className="cursor-pointer text-[#503B40] block md:hidden" onClick={() => setIsMenuShow(!isMenuShow)}>
            {isMenuShow ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        {isMenuShow && (
          <div className="cursor-pointer">
            <Link label="Home" />
            <Link label="About" />
            <Link label="Skills" />
            <Link label="Project" />
            <Link label="Contact" />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
