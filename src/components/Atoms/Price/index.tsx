interface PriceProps {
  price: string;
  priceCurrency: string;
  pricePeriod: string;
  priceNote?: string;
  variant?: string;
}

const Price = ({ price, priceCurrency, pricePeriod, priceNote, variant }: PriceProps) => {
  return (
    <div className="price-offer">
      <span className={"price" + "_" + variant}>
        <span className="price-value">{price.split(",")[0]}</span>
        <span className="price-decimal">,{price.split(",")[1]}</span>
        <span className="price-currency">{priceCurrency}</span>
      </span>
      <span className="price-period">{pricePeriod}</span>
      <span className="price-note">{priceNote}</span>
    </div>
  );
};

export default Price;