import { useRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();

  // useOnClickOutside(ref, navbarOpen, () => setNavbarOpen(false));

  return (
    <nav className="navbar" ref={ref}>
      <button
      className="toggle"
      onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? "close" : 'open'}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li>
          {navbarOpen && (
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
