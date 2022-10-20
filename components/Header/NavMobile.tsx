type Props = {
  toggleDrawer: () => void;
  drawerOpen: boolean;
};

export default function NavMobile({ toggleDrawer, drawerOpen }: Props) {
  return (
    <div className="nav__mobile">
      <a className="nav__mobile__icon" href=""></a>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        aria-haspopup="menu"
        onClick={() => {
          toggleDrawer();
        }}
      >
        <span className="hamburger"></span>
        <span className="sr-only">Menu</span>
      </button>
    </div>
  );
}
