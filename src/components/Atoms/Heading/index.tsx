import cn from "classnames";
import "./style.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: any;
  variant?: "brand" | "dark";
  className?: string;
};

const Heading = ({ children, as: Component, variant, className }: Props) => {
  return <Component className={cn("heading", variant, className)}>{children}</Component>;
};

export default Heading;
