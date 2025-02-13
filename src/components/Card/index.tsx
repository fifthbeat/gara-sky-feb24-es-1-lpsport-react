import cn from "classnames";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Atoms/Heading";

type CardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: any;
  titleVariant?: string;
  thumbImageSrc?: string;
  thumbImageAlt?: string;
};

const Card = (
    {
      title,
      imageSrc,
      imageAlt,
      children,
      titleVariant,
      thumbImageSrc,
      thumbImageAlt,
    }: CardProps) => {
  return (
      <div className={cn("sky-card")}>
        <Image
            src={imageSrc}
            width={600}
            height={350}
            alt={imageAlt}
            className="hwc-sky-logo-wrapper"
        />
        { thumbImageSrc && thumbImageAlt &&
        <div className="card-thumb-image">
          <Image
            src={thumbImageSrc}
            width={60}
            height={60}
            alt={thumbImageAlt}
          />
        </div>
        }
        <div className="card-body">
          <Heading as={"h3"} className={cn("card-title", "card-offer-title-" + titleVariant)}>{title}</Heading>
          {children}
        </div>
      </div>
  );
};

export default Card;
