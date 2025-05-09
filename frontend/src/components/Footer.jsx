import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            The StreetNest: Where style meets soul. We bring you handpicked,
            trend-driven collections that redefine urban fashion. Crafted for
            those who live boldly and embrace every moment with confidence and
            flair. Step up your style, embrace the vibe!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to='/'> <li>HOME</li> </NavLink>
            <NavLink to='/about'> <li>ABOUT US</li> </NavLink>
            <li>DELIVERY</li>
             <li>PRIVACY POLICY</li> 
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-340-5658267</li>
            <li>Thestreetnest@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@thestreetnest.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
