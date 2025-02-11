import Image from "next/image";
import Button from "@/components/Atoms/Button";

export default function Home() {
  return (
      <>
        <div style={{margin: "5rem", backgroundColor: "lightgray", padding: "1rem", display: "flex", gap: "1rem"}}>
          <Button
              as="button"
              variant="btn btn-primary"
              disabled={false}
              text="Click me"
              onClick={() => {}}
          />
          <Button
              as="button"
              variant="btn btn-secondary"
              disabled={false}
              text="Click me"
              onClick={() => {}}
          />
        </div>
        <div style={{margin: "5rem", backgroundColor: "lightgray", padding: "1rem", display: "flex", gap: "1rem"}}>
          <Button
              as="button"
              variant="btn btn-primary btn-disabled"
              disabled={false}
              text="Click me"
              onClick={() => {}}
          />
          <Button
              as="button"
              variant="btn btn-secondary btn-disabled"
              disabled={false}
              text="Click me"
              onClick={() => {}}
          />
        </div>
      </>
  );
}
