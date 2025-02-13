import {CSSProperties, ReactNode} from "react";
import Heading from "@/components/Atoms/Heading";
import Text from "@/components/Atoms/Text";
import Price from "@/components/Atoms/Price";
import HTMLReactParser from "html-react-parser/lib/index";

interface DiscountBannerProps {
  fromPriceValue: string;
  fromPricePeriod: string;
  fromPriceNote: any;
  toPriceValue: string;
  toPricePeriod: string;
  toPriceNote: any;
}

const DiscountBanner = ({fromPriceValue, fromPricePeriod, fromPriceNote,
                          toPriceValue, toPricePeriod, toPriceNote}: DiscountBannerProps) => {
  return (
      <div className="discount-banner-container">
        <div className="discount-banner" >
          <Price
              price={fromPriceValue}
              priceCurrency={"€"}
              pricePeriod={fromPricePeriod}
              priceNote={fromPriceNote}
              variant="primary"
              isStrikethrough
          />
          <Price
              price={toPriceValue}
              priceCurrency={"€"}
              pricePeriod={toPricePeriod}
              priceNote={toPriceNote}
              variant="primary"
              withGradient
          />
        </div>

      </div>
  )
};

export default DiscountBanner;