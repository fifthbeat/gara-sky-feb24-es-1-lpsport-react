import React from 'react';
import Image from "next/image";

type BannerSeparatorProps = {
  imageDesktop?: string;
  imageMobile?: string;
}

const BannerSeparator = ( {imageDesktop, imageMobile} : BannerSeparatorProps) => {
  return (
      <div className="banner-separator">
        <Image
            src="https://picsum.photos/1600/300"
            width={1600}
            height={300}
            alt="Sky logo"
            className="img-desktop"
        />
        <Image
            src="https://picsum.photos/720/400"
            width={720}
            height={400}
            alt="Sky logo"
            className="img-mobile"
        />
      </div>
  );
};

export default BannerSeparator;
