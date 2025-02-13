import cn from "classnames";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Atoms/Heading";

type CardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: any;
};

const Card = (
    {
      title,
      imageSrc,
      imageAlt,
      children,
    }: CardProps) => {
  return (
      <div className={cn("sky-card")}>
        <Image
            // src="/logo-sky.png"
            src={imageSrc}
            width={600}
            height={350}
            alt={imageAlt}
            className="hwc-sky-logo-wrapper"
        />
        <div className="card-body">
          <Heading as={"h3"} className="card-title">{title}</Heading>
          {children}
        </div>
      </div>
  );
};

export default Card;
