import Price from "@/components/Atoms/Price";
import {Col, Container, Row} from "react-bootstrap";

interface DiscountBannerProps {
  fromPriceValue: string;
  fromPricePeriod: string;
  fromPriceNote: any;
  toPriceValue: string;
  toPricePeriod: string;
  toPriceNote: any;
}

const Arrow = () => {
  return (
      <div className="arrow">
        <svg width="144" height="40" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="20" x2="104" y2="20" stroke="gray" strokeWidth="2"/>
          <polygon points="104,15 116,20 104,25" fill="gray"/>
        </svg>
      </div>
  )
}

const DiscountBanner = ({
                          fromPriceValue, fromPricePeriod, fromPriceNote,
                          toPriceValue, toPricePeriod, toPriceNote
                        }: DiscountBannerProps) => {
  return (
      <Container className={"mt-5"}>
        <Row className="justify-content-md-center discount-banner-container">
          <Col md={8} className="discount-banner">
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
          </Col>
        </Row>
      </Container>

  )
};

export default DiscountBanner;