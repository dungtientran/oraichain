import React from "react";
import { icons } from "../../libs/icons";
// import { Link } from "react-router-dom";

const { LogoSvg, ArrowSvg } = icons;

const navs = [
  {
    id: 1,
    label: "Products",
    path: "",
    childrend: [{}],
  },
  {
    id: 2,
    label: "Blog",
    path: "",
  },
  {
    id: 3,
    label: "Jobs",
    path: "",
  },
  {
    id: 4,
    label: "Ecosystem",
    path: "",
    childrend: [{}],
  },
  {
    id: 5,
    label: "Docs",
    path: "",
  },
];

export const Nav = () => {


  const handleClick = () => {

  }

  return (
    <nav>
      <ul className="header-nav">
        {/* Logo */}
        <li>
          <a href="#" className="header-nav-item nav-logo">
            <LogoSvg style={{ marginRight: "7px", marginBottom: '2px' }} />
            <span className="text-small color-primary">The Graph</span>
          </a>
        </li>

        {/* Nav list */}
        {navs.map((nav) => (
          <li key={nav.id} className="header-nav-item" onClick={handleClick}>

            {!!nav.childrend ? (
              <span className="header-nav-item_button">
                <span className="text-small color-secondary">
                  {nav.label}
                </span>
                <span className="header-nav-item_arrow">
                  <ArrowSvg style={{ width: "12px", height: "12px", }} />
                </span>
              </span>

            ) : (
              <span className="text-small color-secondary header-nav-item_button">
                {nav.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
