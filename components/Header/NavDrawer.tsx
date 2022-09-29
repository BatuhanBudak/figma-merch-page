export default function NavDrawer({ drawerOpen }) {
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
            WORK
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            ABOUT
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            NEWS
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            THINKING
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            PLEDGE
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            CAREERS
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            CONTACT
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            INITIATIVES
          </a>
        </li>
      </ul>
      <div className="nav__drawer__copyright meta">
        <span>BASIC/DEPT®, inc</span>
        <span>10 - 22©</span>
      </div>
    </div>
  );
}
