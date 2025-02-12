import Price from "@/components/Atoms/Price";
import Button from "@/components/Atoms/Button";
import Heading from "@/components/Atoms/Heading";
import { redirect } from 'next/navigation'

const Hero = ({content}: any) => {
  if (!content)
    return <></>
  return (
    <div className={"hero"}>
      <Heading as="h1" withGradient variant="display">{content?.group[0].title.title}</Heading>
      <Heading as="h3" variant="hero-text">{content?.group[0].description.content}</Heading>
      <Price
        price={content?.price.value.toString()}
        priceCurrency={"€"}
        pricePeriod={content?.price.label}
        priceNote={content?.price.info}
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
        {
          content?.ctas.map((cta: any, index: number) => (
            <Button
              key={"hero_button_" + index}
              as="button"
              variant={"btn btn-" + cta.button.variant}
              onClick={() => redirect(cta.button.link.href)}
            >{cta.button.label}</Button>
          ))
        }
      </div>
    </div>
  )
};

export default Hero;