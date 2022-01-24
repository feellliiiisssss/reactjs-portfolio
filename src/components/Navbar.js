import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-indigo-600">
      <span className="text-white">Navbar</span>
      <div className="text-white block md:hidden"><MenuIcon /></div>
    </div>
  );
};

export default Navbar;
