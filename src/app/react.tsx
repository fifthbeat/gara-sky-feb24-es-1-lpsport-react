"use client"

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
import Card from "@/components/Card";
import {Col, Container, Row} from "react-bootstrap";
import Sticky from "@/components/Sticky";
import Head from "next/head";

interface ReactMainProps {
  pageData: any;
}

const mapComponents = (componentName: string, content: any) => {
  switch (componentName) {
    case "hero":
      return <Hero badge={content?.badge} title={content?.group[0].title.title}
                   description={HTMLReactParser(content?.group[0].description[0].content)}
                   priceValue={content?.price.value} pricePeriod={content?.price.label}
                   priceNote={HTMLReactParser(content?.price.info)} infoLabel={content?.info.label}
                   ctaButtons={content?.ctas} modalTitle={content?.info.modal[0].title_modal}
                   modalBody={HTMLReactParser(content?.info.modal[0].content)}
      />;
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
      return <div className="heading-editorial">
        <Heading variant={content?.group.title.style[0].color}
                      as={content?.group.title.style[0].tag}>
          {content?.group.title.title}
        </Heading>
        {content?.text.content &&
        <Heading className={"heading-sub-text"} variant={content?.text.style[0].color}
                 as={"h5"}>
          {HTMLReactParser(content?.text.content)}
        </Heading>
        }
      </div>
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
    case "card_list":
      return <Container>
        <Row>
            {content?.list.map((item: any, index: number) => {
              return <Col key={"card_offer_" + index} className={"centered"} xs={12} sm={6}>
                <Card
                  imageSrc={item?.card_offer.image.file.url}
                  imageAlt={item?.card_offer.image.alt}
                  title={item?.card_offer.title} titleVariant={"centered"}
                  thumbImageSrc={item?.card_offer.thumb_image.file.url}
                  thumbImageAlt={item?.card_offer.thumb_image.alt}>
                <div className={"card-offer-description"}>{item?.card_offer.description}</div>
              </Card>
            </Col>
            })}
        </Row>
      </Container>;
    default:
      return <></>
  }
}

export default function ReactMain({pageData} : ReactMainProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
          {pageData && pageData.dynamic && pageData.dynamic.map((content: any, index: number) => {
            return (
              <Fragment key={content._content_type_uid + "_" + index}>
                {mapComponents(content._content_type_uid, content)}
              </Fragment>)
          })}
        <Sticky content={pageData.sticky[0]}/>
        <Footer />
      </>
  );
}
