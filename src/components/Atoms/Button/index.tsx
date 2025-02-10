interface ButtonProps {
  as: "button" | "link";
  variant: string;
  disabled: boolean;
  text: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({as = 'button', variant, disabled, text, onClick, href}: ButtonProps) => {

  if (as === "button") {
    return (
      <button className={variant} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    )
  } else if (as === "link") {
    return (
      <a href={href} className={variant}>
        {text}
      </a>
    )
  }
};

export default Button;