import React, { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  menu: { label: ReactNode }[]
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
    <div ref={ref} className={`dropdown-container ${className}`}>
      <div className="dropdown-container-children" onClick={handleShowDropDown}>
        {children}
      </div>
      <ul
        className='dropdown-menu'
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
