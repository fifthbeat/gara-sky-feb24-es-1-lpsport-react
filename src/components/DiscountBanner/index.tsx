import {CSSProperties, ReactNode} from "react";
import Heading from "@/components/Atoms/Heading";
import Text from "@/components/Atoms/Text";
import Price from "@/components/Atoms/Price";

interface DiscountBannerProps {
  style?: CSSProperties;
}

const DiscountBanner = ({style}: DiscountBannerProps) => {

  return (
      <div className="discount-banner-container">
        <Heading
            as="h2"
            variant="display"
            withGradient
        >Approfitta dell'offerta riservata a te e continua a guardare i contenuti Sky</Heading>
        <Text variant="centered">Inizia a guardare subito, senza cambiare decoder.</Text>

        <div className="discount-banner" >
          <Price
              price="24,90"
              priceCurrency={"€"}
              pricePeriod="/mese"
              priceNote="IVA esclusa"
              variant="primary"
              isStrikethrough
              caption="Prezzo per i nuovi clienti"
          />
          <Price
              price="24,90"
              priceCurrency={"€"}
              pricePeriod="/mese"
              priceNote="IVA esclusa"
              variant="primary"
              withGradient
              caption="Prezzo riservato a te"
          />
        </div>

      </div>
  )
};

export default DiscountBanner;