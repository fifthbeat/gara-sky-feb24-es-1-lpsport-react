import cn from "classnames";
import "./style.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string;
  withGradient?: boolean;
  className?: string;
  variant: "large-display" | "display" | "page-title" | "section-title" | "hero-text";
};

const Heading = ({ children, as: Component, className, variant, withGradient = false }: Props) => {
  const classes = cn("heading", variant, withGradient ? "heading__gradient" : " ", className);
  // return <Component className={cn("heading", variant, withGradient ? "heading__gradient" : "")}>{children}</Component>;
  return <Component className={classes}>{children}</Component>;
};

export default Heading;
