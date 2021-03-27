import { useState } from "react";
import "../styles/header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import links, { linkType } from "../data/headerLinks";

const Header = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className={`header ${showMobileMenu && "header--column"}`}>
      <a href="/">
        <div className="header__logo"></div>
      </a>

      <nav className="header__nav">
        <ul className={`header__ul header__ul--${showMobileMenu && "active"}`}>
          {links.map(({ path, title }: linkType, idx: number) => {
            return (
              <li className="header__navItem" key={idx}>
                <a href={path}>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {!showMobileMenu ? (
        <AiOutlineMenu
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="header__hamburger"
        />
      ) : (
        <AiOutlineClose
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="header__hamburger"
        />
      )}
    </div>
  );
};

export default Header;
