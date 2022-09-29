import { ChangeEvent, useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [input, setInput] = useState("");
  const currentScroll = useRef(0);

  useEffect(() => {
    function handleScroll() {
      let currScroll = currentScroll.current;
      currScroll = window.scrollY;

      if (currScroll <= 0) {
        document.body.classList.remove("scroll-up");
        document.body.classList.remove("scroll-down");
      }
      //Scroll Down
      else if (currScroll > lastScrollY) {
        document.body.classList.remove("scroll-up");
        document.body.classList.add("scroll-down");
      }
      //Scroll Up
      else if (currScroll < lastScrollY) {
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
      }
      setLastScrollY(currScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="search">
          <form className="search-form">
            <input
              name="search"
              type="search"
              className="search-field"
              placeholder="Search"
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
        <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
          <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
          <NavDesktop />
          <NavDrawer drawerOpen={drawerOpen} />
        </nav>
      </div>
    </header>
  );
}
