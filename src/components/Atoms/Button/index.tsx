
import {CSSProperties, ReactNode} from "react";

interface ButtonProps {
  as: "button" | "link";
  children: string | ReactNode;
  variant: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
}

const Button = ({children, as = 'button', variant, disabled, onClick, href, style}: ButtonProps) => {

  if (as === "button") {
    return (
      <button className={variant} disabled={disabled} onClick={onClick} style={style}>
        {children}
      </button>
    )
  } else if (as === "link") {
    return (
      <a href={href} className={variant} style={style} onClick={onClick}>
        {children}
      </a>
    )
  }
};

export default Button;