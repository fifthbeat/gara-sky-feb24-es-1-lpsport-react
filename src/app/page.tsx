import Image from "next/image";
import Button from "@/components/Atoms/Button";
import Price from "@/components/Atoms/Price";

export default function Home() {
  return (
      <>
        <div style={{margin: "5rem", backgroundColor: "white", padding: "1rem", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1 className="gradient-primary">Price</h1>
          <Price
              price="24,90"
              priceCurrency={"€"}
              pricePeriod="/mese"
              priceNote="IVA esclusa"
              variant="primary"
          />
        </div>

        <div style={{margin: "5rem", backgroundColor: "white", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
          <h1>Buttons</h1>
          <div style={{display: "flex", gap: "1rem"}}>
            <Button
                as="button"
                variant="btn btn-primary"
                disabled={false}
                text="Click me"
            />
            <Button
                as="button"
                variant="btn btn-secondary"
                disabled={false}
                text="Click me"
            />
            <Button
                as="button"
                variant="btn btn-primary btn-disabled"
                disabled={false}
                text="Click me"
            />
            <Button
                as="button"
                variant="btn btn-secondary btn-disabled"
                disabled={false}
                text="Click me"
            /></div>
        </div>
      </>
  );
}
