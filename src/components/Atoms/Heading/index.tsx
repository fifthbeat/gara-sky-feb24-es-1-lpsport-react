import cn from "classnames";
import "./style.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: any;
  variant: "brand" | "dark";
};

const Heading = ({ children, as: Component, variant }: Props) => {
  return <Component className={cn("heading", variant)}>{children}</Component>;
};

export default Heading;
