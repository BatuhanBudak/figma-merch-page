export default function NavDrawer({ drawerOpen }: { drawerOpen: boolean }) {
  return (
    <div
      className="nav__drawer"
      aria-hidden={!drawerOpen}
      tabIndex={drawerOpen ? 0 : -1}
      role="menu"
    >
      <ul className="nav__drawer__list" id="mobile-nav-primary">
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            Shop
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            About
          </a>
        </li>
      </ul>
      <ul className="nav__drawer__list__secondary">
        <li className="">
          <a href="" className="nav__drawer__list__secondary__link">
            Privacy &amp; Terms
          </a>
        </li>
        <li className="">
          <a className="nav__drawer__list__secondary__link" href="">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}
