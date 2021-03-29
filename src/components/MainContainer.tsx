import { ReactNode } from "react";
import "../styles/mainContainer.scss";

interface mainContainerProps {
  isFullWidth?: boolean;
  children: ReactNode | ReactNode[];
}

const mainContainer = ({
  isFullWidth = false,
  children,
}: mainContainerProps) => (
  <main className={`${!isFullWidth && "body"}`}>{children}</main>
);

export default mainContainer;
