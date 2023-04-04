import dynamicWrapper from "../wrapper/dynamicWrapper";

export const Nav = dynamicWrapper(() => import("./nav/index"));
export const Header = dynamicWrapper(() => import("./header/index"));
export const Main = dynamicWrapper(() => import("./main/index"));
export const Footer = dynamicWrapper(() => import("./footer/index"));
