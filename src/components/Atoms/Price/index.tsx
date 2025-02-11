import {CSSProperties} from "react";

interface PriceProps {
  price: string;
  priceCurrency: string;
  pricePeriod: string;
  priceNote?: string;
  variant?: string;
  isStrikethrough?: boolean;
  withGradient?: boolean;
  style?: CSSProperties;
}

const Price = ({price, priceCurrency, pricePeriod, priceNote, variant, isStrikethrough, withGradient, style}: PriceProps) => {
  return (
      <>
        <div className={`price-offer ${isStrikethrough && "price-old strikethrough"}`} style={style}>
          <span className={`price price_${variant} ${withGradient && "gradient-primary"}`}>
            <span className="price-value">{price.split(",")[0]}</span>
            <div className="price-right">
              <div className="currency-right">
              <span className="price-decimal">,{price.split(",")[1]}</span>
              <span className="price-currency">{priceCurrency}</span>
            </div>
              <span className="price-period">{pricePeriod}</span>
            </div>
          </span>
          <span className="price-note">{priceNote}</span>
        </div>
      </>
  );
};

export default Price;