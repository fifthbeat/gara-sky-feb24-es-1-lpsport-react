import cn from "classnames";
import "./style.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string;
  withGradient?: boolean;
  variant: "large-display" | "display" | "page-title" | "section-title";
};

const Heading = ({ children, as: Component, variant, withGradient = false }: Props) => {
  return <Component className={cn("heading", variant, withGradient ? "heading__gradient" : "")}>{children}</Component>;
};

export default Heading;
