import React from "react";
import useToggle from "../../hooks/useToggle";
import { MapPin, Magnify, FigmaLogo } from "../Icon";

type Props = {
  toggleDrawer: () => void;
  toggleSearch: () => void;
  drawerOpen: boolean;
};

export default function NavInner({
  toggleDrawer,
  drawerOpen,
  toggleSearch,
}: Props) {
  const [selectOpen, toggleSelect] = useToggle();

  return (
    <div className="inner">
      <div className="button-wrap">
        <button
          type="button"
          className="link nav__toggle"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-primary"
          onClick={() => {
            toggleDrawer();
          }}
        >
          <span className="hamburger"></span>
          <span className="sr-only">Menu</span>
        </button>
        <button className="search" onClick={() => toggleSearch()}>
          <Magnify />
        </button>
      </div>

      <ul className="left-menu">
        <li>
          <a href="" className="link button inverse ">
            Shop
          </a>
        </li>
        <li>
          <a href="/pages/about" className="link button inverse ">
            About
          </a>
        </li>
        <li className="search-button-wrap">
          <button className="search" onClick={() => toggleSearch()}>
            <Magnify />
          </button>
        </li>
      </ul>
      <a href="" className="logo-link">
        <FigmaLogo />
      </a>
      <div className="right-menu">
        <div className="snippet--location-selector">
          <div className="select-wrapper header-select">
            <button
              className="mobile-select-toggle"
              aria-label="Select your country"
              onClick={toggleSelect}
            >
              <MapPin />
            </button>
            <select
              id="header-country-select"
              className={`country-select ${selectOpen ? "mobile-opened" : ""}`}
            >
              <option value="store-ca">Canada</option>
              <option value="store-jp">Japan</option>
              <option value="store-uk">United Kingdom</option>
              <option value="store">United States</option>
              <option value="store">I&apos;m just browsing</option>
            </select>
          </div>
        </div>
        <a href="" className="link button inverse cart-link">
          <span className="cart-label">Cart</span>
          <span className="cart-item-count"> 0</span>
        </a>
      </div>
    </div>
  );
}
