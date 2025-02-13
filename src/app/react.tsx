"use client"

import Image from "next/image";
import Button from "@/components/Atoms/Button";
import Price from "@/components/Atoms/Price";
import Heading from "@/components/Atoms/Heading";
import SkyAccordion from "@/components/Atoms/SkyAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {Fragment} from "react";
import Carousel from "@/components/Carousel";
import DiscountBanner from "@/components/DiscountBanner";
import HTMLReactParser from "html-react-parser";
import BannerSeparator from "@/components/BannerSeparator";
import Sticky from "@/components/Sticky";

interface ReactMainProps {
  pageData: any;
}

const mapComponents = (componentName: string, content: any) => {
  switch (componentName) {
    case "hero":
      return <Hero content={content}/>;
    case "banner_discount":
      return <DiscountBanner
        fromPriceValue={content?.compare.from.value.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
        fromPricePeriod={content?.compare.from.label}
        fromPriceNote={HTMLReactParser(content?.compare.from.info)}
        toPriceValue={content?.compare.to.value.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
        toPricePeriod={content?.compare.to.label}
        toPriceNote={HTMLReactParser(content?.compare.to.info)}
      />;
    case "heading_editorial":
      return <div className="heading-editorial"><Heading variant={content?.group.title.style[0].color}
                      as={content?.group.title.style[0].tag}>{content?.group.title.title}</Heading></div>
    case "accordion_group":
      return <div>
        {content.list.map((accordion: any, index: number) => {
          return <SkyAccordion
            key={"accordion_" + index}
            header={<h4>{accordion.item.title}</h4>}
            body={HTMLReactParser(accordion.item.description)}/>
        })}</div>
    case "carousel":
      return <Carousel cardList={content?.list}/>
    case "separator":
      return <BannerSeparator imageDesktop={content?.image_desktop.url} imageMobile={content?.image_mobile.url}/>
    default:
      return <></>
  }
}

export default function ReactMain({pageData} : ReactMainProps) {
  return (
      <>
        <Header />
          {pageData && pageData.dynamic && pageData.dynamic.map((content: any, index: number) => {
            return (
              <Fragment key={content._content_type_uid + "_" + index}>
                {mapComponents(content._content_type_uid, content)}
              </Fragment>)
          })}
        <Sticky content={pageData.sticky}/>
        <Footer />
      </>
  );
}
