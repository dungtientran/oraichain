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
  return (
    <nav>
      <ul className="header-nav">
        {/* Logo */}
        <li>
          <span className="header-nav-item">
            <LogoSvg style={{ marginRight: "7px" }} />
            <span className="text-small color-primary">The Graph</span>
          </span>
        </li>

        {/* Nav list */}
        {navs.map((nav) => (
          <li key={nav.id}>
            <a href="#" className="header-nav-item">
              <span className="text-small color-secondary">{nav.label}</span>

              {!!nav.childrend && (
                <span className="header-nav-item_arrow">
                  <ArrowSvg style={{ width: "12px", height: "12px" }} />
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
