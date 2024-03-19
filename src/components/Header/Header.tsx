import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Language } from "./Language";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsScrollUp(scrollTop < lastScrollTop);
      setLastScrollTop(scrollTop);

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (scrollTop === 0) {
        setIsScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`${isScrollUp ? 'header-visiable' : 'header-container'} ${isScrolled && 'bg-black'}`}>
      <div className="header container">
        {/* Nav */}
        <Nav />

        {/* Language */}
        <Language />
      </div>
    </header>
  );
};

export default Header;
