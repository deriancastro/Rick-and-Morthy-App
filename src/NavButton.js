import "./NavButton.css";

export default function NavButton({
  navPage,
  activePage,
  setActivePage,
  image,
}) {
  return (
    <button
      className={navPage === activePage ? "NavButton active" : "NavButton"}
      onClick={handleNavClick}
    >
      <img src={image} alt="" />
    </button>
  );

  function handleNavClick() {
    setActivePage(navPage);
  }
}
