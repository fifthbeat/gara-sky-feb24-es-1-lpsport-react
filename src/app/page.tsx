import Button from "@/components/Atoms/Button";
import Price from "@/components/Atoms/Price";
import Heading from "@/components/Atoms/Heading";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiscountBanner from "@/components/DiscountBanner";
import SkyAccordion from "@/components/Atoms/SkyAccordion";
// import Carousel from "@/components/Carousel";

export default function Home() {
  return (
      <>
        <Header />

        {/*<Carousel />*/}

        <div style={{
          margin: "5rem",
          backgroundColor: "white",
          padding: "1rem",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Hero
            title={"Sky TV + Sky Sport"}
            text={"Continua a vedere tutto lo sport di Sky al miglior prezzo e senza dover cambiare decoder."} price={"23.90"}/>
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

        <DiscountBanner />

        <div style={{
          margin: "5rem",
          backgroundColor: "white",
          padding: "1rem",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <SkyAccordion
              header={<Heading as="h4" variant="section-title">Titolo</Heading>}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam sit amet nisi sit amet nunc tincidunt aliquam. Nulla facilisi. Nullam sit amet nisi sit amet nunc tincidunt aliquam."
          />
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
