interface ButtonProps {
  variant: string;
  disabled: boolean;
  title: string;
  onClick?: () => void;
}

const Button = ({variant, disabled, title, onClick }: ButtonProps) => {

  return (
    <button className={variant} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;