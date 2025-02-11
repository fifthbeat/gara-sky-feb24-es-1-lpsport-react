import {ReactNode} from "react";

interface ButtonProps {
  as: "button" | "link";
  children: string | ReactNode;
  variant: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

const Button = ({children, as = 'button', variant, disabled, onClick, href}: ButtonProps) => {

  if (as === "button") {
    return (
      <button className={variant} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  } else if (as === "link") {
    return (
      <a href={href} className={variant}>
        {children}
      </a>
    )
  }
};

export default Button;