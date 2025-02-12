import {CSSProperties, ReactNode} from "react";

interface TextProps {
  children: string | ReactNode;
  as?: "span" | "p";
  variant?: "centered";
  style?: CSSProperties;
}

const Text = ({children, as : As = "span", variant, style}: TextProps) => {
  return (
    <As className={`txt ${variant}`} style={style}>
      {children}
    </As>
  )
};

export default Text;