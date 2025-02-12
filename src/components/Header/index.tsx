import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
      <header>
        <div className="sky-logo-container">
          <Image
              src="/logo-sky.png"
              width={55}
              height={34.59}
              alt="Sky logo"
              className="hwc-sky-logo-wrapper"
          />
        </div>
      </header>
  );
};

export default Header;
