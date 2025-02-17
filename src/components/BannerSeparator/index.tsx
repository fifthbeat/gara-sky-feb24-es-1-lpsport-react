import React from 'react';
import Image from "next/image";

type BannerSeparatorProps = {
  imageDesktop?: string;
  imageMobile?: string;
}

const BannerSeparator = ( {imageDesktop = "https://picsum.photos/1600/300", imageMobile = "https://picsum.photos/720/400"} : BannerSeparatorProps) => {
  return (
      <div className="banner-separator">
        <Image
            src={imageDesktop}
            width={1600}
            height={300}
            alt="Sky logo"
            className="img-desktop"
        />
        <Image
            src={imageMobile}
            width={720}
            height={400}
            alt="Sky logo"
            className="img-mobile"
        />
      </div>
  );
};

export default BannerSeparator;
