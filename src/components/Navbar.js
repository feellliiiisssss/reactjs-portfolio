import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Link = (props) => {
  return <div className="py-2 text-white">{props.label}</div>;
}

const Navbar = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <div className="p-4 bg-indigo-600">
      <div className="flex justify-between">
        <span className="text-white">Navbar</span>
        <div className="text-white block md:hidden" onClick={() => setIsMenuShow(!isMenuShow)}>{isMenuShow ? <CloseIcon /> : <MenuIcon />}</div>
      </div>
      {isMenuShow &&
        <div>
          <Link label="Home"/>
          <Link label="About"/>
          <Link label="Contact"/>
        </div>
      }
    </div>
  );
};

export default Navbar;
