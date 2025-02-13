import cn from "classnames";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Atoms/Heading";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = (
    {
      title,
      children,
    }: CardProps) => {
  return (
      <div className={cn("sky-card")}>
        <Image
            // src="/logo-sky.png"
            src="https://picsum.photos/600/350"
            width={600}
            height={350}
            alt=""
            className="hwc-sky-logo-wrapper"
        />
        <div className="card-body">
          <Heading as={"h3"} variant="section-title" className="card-title">{title}</Heading>
          {children}
        </div>
      </div>
  );
};

export default Card;
