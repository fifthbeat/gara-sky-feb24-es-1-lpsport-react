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
      return <Heading withGradient={content?.group.title.style[0].color === "brand"}
                      as={content?.group.title.style[0].tag} variant="display">{content?.group.title.title}</Heading>
    case "accordion_group":
      return content.list.map((accordion: any, index: number) => {
        return <SkyAccordion
          key={"accordion_" + index}
          header={<h4>{accordion.item.title}</h4>}
          body={HTMLReactParser(accordion.item.description)} />
        })

    default:
      return <></>
  }
}

export default function ReactMain({pageData} : ReactMainProps) {
  return (
      <>
        <Header />
        {/*<div style={{*/}
        {/*  margin: "5rem",*/}
        {/*  backgroundColor: "white",*/}
        {/*  padding: "1rem",*/}
        {/*  display: 'flex',*/}
        {/*  flexDirection: 'column',*/}
        {/*  alignItems: 'center'*/}
        {/*}}>*/}
        {/*  <SkyAccordion*/}
        {/*      header="Titolo"*/}
        {/*      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam sit amet nisi sit amet nunc tincidunt aliquam. Nulla facilisi. Nullam sit amet nisi sit amet nunc tincidunt aliquam."*/}
        {/*  />*/}
        {/*</div>*/}
        <div style={{
          margin: "5rem",
          backgroundColor: "white",
          padding: "1rem",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {pageData && pageData.dynamic && pageData.dynamic.map((content: any, index: number) => {
            return (
              <Fragment key={content._content_type_uid + "_" + index}>
                {mapComponents(content._content_type_uid, content)}
              </Fragment>)
          })}
          {/*<Hero*/}
          {/*  title={"Sky TV + Sky Sport"}*/}
          {/*  text={"Continua a vedere tutto lo sport di Sky al miglior prezzo e senza dover cambiare decoder."} price={"23.90"}/>*/}
          <div style={{
            margin: "5rem",
            backgroundColor: "white",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3rem"
          }}>
            <Price
                price="24,90"
                priceCurrency={"€"}
                pricePeriod="/mese"
                priceNote="IVA esclusa"
                variant="primary"
                isStrikethrough
            />
            <Price
                price="24,90"
                priceCurrency={"€"}
                pricePeriod="/mese"
                priceNote="IVA esclusa"
                variant="primary"
                withGradient
            />
          </div>
        </div>

        <BannerSeparator />

        <Carousel />

        <div style={{
          margin: "5rem",
          backgroundColor: "white",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem"
        }}>
          <Heading as="h2" variant="display">Buttons</Heading>
          <div style={{display: "flex", gap: "1rem"}}>
            <Button
                as="button"
                variant="btn btn-primary"
                disabled={false}
            >Click me</Button>
            <Button
                as="button"
                variant="btn btn-secondary"
                disabled={false}
            >Click me</Button>
            <Button
                as="button"
                variant="btn btn-primary btn-disabled"
                disabled={false}
            >Click me</Button>
            <Button
                as="button"
                variant="btn btn-secondary btn-disabled"
                disabled={false}
            >Click me</Button>
          </div>
        </div>
        <Footer />
      </>
  );
}
