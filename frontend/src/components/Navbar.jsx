import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const isLoggedIn = !!localStorage.getItem("token");

  const { cart } = useContext(CartContext);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const collapseRef = useRef(null);

  // Click outside to close mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const collapseEl = collapseRef.current;
      if (!collapseEl) return;

      const isToggler = event.target.classList.contains("navbar-toggler");
      const isInsideCollapse = collapseEl.contains(event.target);

      const isCollapsed = collapseEl.classList.contains("show"); // check if open
      if (!isToggler && !isInsideCollapse && isCollapsed) {
        const bsCollapse = new window.bootstrap.Collapse(collapseEl, { toggle: false });
        bsCollapse.hide();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">BookStore</Link>

        {/* Hamburger button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
            </li>
            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/addBooks">Add Books</Link>
              </li>
            )}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hi, {name}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger ms-2" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
