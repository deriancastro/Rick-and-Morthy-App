import "./NavButton.css";

export default function NavButton({ navPage, activePage, setActivePage }) {
  return (
    <button
      className={navPage === activePage ? "NavButton active" : "NavButton"}
      onClick={handleNavClick}
    >
      {navPage}
    </button>
  );

  function handleNavClick() {
    setActivePage(navPage);
  }
}
