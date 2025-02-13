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

interface ReactMainProps {
  pageData: any;
}

const mapComponents = (componentName: string, content: any) => {
  switch (componentName) {
    case "hero":
      return <Hero content={content}/>;
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
