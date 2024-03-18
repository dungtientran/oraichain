import { FC, ReactElement } from "react";
import type { RouteProps } from "react-router";

const WrapperRoute: FC<RouteProps> = ({ element }) => {
  return element as ReactElement;
};

export default WrapperRoute;
