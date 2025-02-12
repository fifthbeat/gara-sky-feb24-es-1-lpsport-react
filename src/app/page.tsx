import Image from "next/image";
import Button from "@/components/Atoms/Button";
import Price from "@/components/Atoms/Price";
import Heading from "@/components/Atoms/Heading";
import SkyAccordion from "@/components/Atoms/SkyAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
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
          <Heading as="h1" withGradient variant="display">Price</Heading>
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
