import React, { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { icons } from "../../libs/icons";

const { ArrowSvg } = icons;


interface Props {
  children: ReactNode;
  className?: string;
  menu: { label: ReactNode }[];

}

const Dropdown: FC<Props> = ({ children, menu, className }) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  const handleShowDropDown = () => {
    setIsShow(!isShow);
  };
  const handleCloseDropDown = () => {
    setIsShow(false);
  };

  return (
    <div ref={ref} className={`dropdown-container `}>
      <div className="dropdown-container-children" onClick={handleShowDropDown}>
        {children}
        <span className={`arrow-down ${isShow ? 'arow-open' : ''}`}>
          <ArrowSvg style={{ width: '12px', height: '12px' }} />
        </span>
      </div>
      <ul
        className={`dropdown-menu ${className} ${isShow ? 'dropdown-menu-show' : 'dropdown-menu-hidden'}`}
      >
        {menu.map((item, i) => (
          <li onClick={handleCloseDropDown} key={i} className="dropdown_item">
            {!!item?.label && item?.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
