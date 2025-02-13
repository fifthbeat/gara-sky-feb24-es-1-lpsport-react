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

const  Arrow = () => {
  return (
      <div className="arrow">
        <svg width="144" height="40" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="20" x2="104" y2="20" stroke="gray" stroke-width="2"/>
          <polygon points="104,15 116,20 104,25" fill="gray"/>
        </svg>
      </div>
  )
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
          <Arrow/>
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