import {CSSProperties, ReactNode} from "react";
import Price from "@/components/Atoms/Price";
import Button from "@/components/Atoms/Button";
import Heading from "@/components/Atoms/Heading";

interface ButtonProps {
  title: string;
  text: string;
  price: string;
  style?: CSSProperties;
}

const Hero = ({title, text, price, style}: ButtonProps) => {

  return (
    <div className={"hero"} style={style}>
      <Heading as="h1" withGradient variant="display">{title}</Heading>
      <Heading as="h3" variant="hero-text">{text}</Heading>
      <Price
        price={price}
        priceCurrency={"€"}
        pricePeriod="/al mese per 18 mesi"
        priceNote="Nessun costo di attivazione"
        variant="primary"
        style={{marginTop: "2.5rem"}}
        withGradient
      />
      <Button
        style={{marginTop: "0.2rem"}}
        as="link"
        variant="link-primary"
      >Dettagli offerta</Button>
      <div className={"hero-buttons"}>
        <Button
          as="button"
          variant="btn btn-secondary"
        >Ti chiamiamo noi</Button>
        <Button
          as="button"
          variant="btn btn-primary"
        >Completa l'acquisto</Button>
      </div>
    </div>
  )
};

export default Hero;