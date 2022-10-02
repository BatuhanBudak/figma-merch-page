import { ChangeEvent, useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import NavInner from "./NavInner";
import { motion } from "framer-motion";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [input, setInput] = useState("");
  const [searchOpen, toggleSearch] = useToggle();
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

  const variants = {
    hidden: {
      height: 0,
    },
    visible: {
      height: "auto",
    },
  };

  return (
    <header className="header">
      <div className="container">
        <motion.div
          className={`${searchOpen ? "search-open" : ""} search-container`}
          variants={variants}
          animate={searchOpen ? "visible" : "hidden"}
          transition={{ duration: 0 }}
        >
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
        </motion.div>
        <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
          <NavInner
            toggleDrawer={toggleDrawer}
            drawerOpen={drawerOpen}
            toggleSearch={toggleSearch}
          />
          <NavDrawer drawerOpen={drawerOpen} />
        </nav>
      </div>
    </header>
  );
}
