import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMobile, sidebarCollapsed, setSidebarCollapsed }) => {
  const sidebarRef = useRef(null);
  const sidebarToggleBtnRef = useRef(null);

  useEffect(() => {
    if (!isMobile && sidebarCollapsed && sidebarRef.current) {
      sidebarRef.current.classList.add("collapsed");
      const icon = sidebarToggleBtnRef.current.querySelector("i");
      if (icon) {
        icon.className = "fas fa-chevron-right";
      }
    }
  }, [sidebarCollapsed, isMobile]);

  const toggleSidebar = () => {
    if (isMobile) return;

    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle("collapsed");
      const isCollapsed = sidebarRef.current.classList.contains("collapsed");
      setSidebarCollapsed(isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);

      const icon = sidebarToggleBtnRef.current.querySelector("i");
      if (icon) {
        icon.className = isCollapsed ? "fas fa-chevron-right" : "fas fa-bars";
      }
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    const navItem = e.currentTarget.closest(".navItem");
    const dropdownMenu = navItem.querySelector(".dropdownMenu");
    const isOpen = navItem.classList.contains("open");

    document.querySelectorAll(".navItem.has-dropdown.open").forEach((item) => {
      if (item !== navItem) {
        item.classList.remove("open");
        const openDropdown = item.querySelector(".dropdownMenu");
        if (openDropdown) {
          openDropdown.style.maxHeight = null;
        }
      }
    });

    if (dropdownMenu) {
      navItem.classList.toggle("open");
      if (!isOpen) {
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        setTimeout(() => {
          if (navItem.classList.contains("open")) {
            dropdownMenu.style.maxHeight = "none";
          }
        }, 400);
      } else {
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        requestAnimationFrame(() => {
          dropdownMenu.style.maxHeight = "0";
        });
      }
    }
  };

  return (
    <>
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`} id="sidebar" ref={sidebarRef}>
        <div className="sidebar-header">
          <div className="logo">
            <img src="https://astro.synilogictech.com/uploads/setting/80364.png" alt="" />
          </div>
          <div className="search-container">
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass Icon-color"></i>
            </span>
            <input type="text" className="search-input" placeholder="Search menu..." />
          </div>
        </div>

        <nav className="sidebar-nav">
          {/* Main Section */}
          <div className="nav-section">
            <h3 className="nav-heading">
              <i className="fas fa-home"></i>
              <span className="heading-text">Main</span>
            </h3>
            <ul className="nav-menu">
              <li className="navItem active">
                <NavLink to="/" className="navLink">
                  <div className="nav-icon">
                     <i className="fas fa-home"></i>
                  </div>
                  <span className="nav-text">Dashboard</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Management Section */}
          <div className="nav-section">
            <h3 className="nav-heading">
              <i className="fas fa-cogs"></i>
              <span className="heading-text">User Management</span>
            </h3>
            <ul className="nav-menu">
              <li className="navItem">
                <NavLink to="/astrologer" className="navLink">
                  <div className="nav-icon">
                  <i className="fas fa-user-astronaut"></i>
                  </div>
                  <span className="nav-text">Astrologer</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>

            <li className="navItem">
                <NavLink to="/astrologer" className="navLink">
                  <div className="nav-icon">
                  <i className="fas fa-user-astronaut"></i>
                  </div>
                  <span className="nav-text">AI Astrologer</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>
              
              <li className="navItem">
                <NavLink to="/astrologer" className="navLink">
                  <div className="nav-icon">
                  <i className="fas fa-users"></i>
                  </div>
                  <span className="nav-text">Customer</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/astrologer" className="navLink">
                  <div className="nav-icon">
                <i className="fas fa-store"></i>
                  </div>
                  <span className="nav-text">Vendor</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>


              <li className="navItem has-dropdown">
                <a href="#" className="navLink dropdownToggle" onClick={toggleDropdown}>
                  <div className="nav-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <span className="nav-text">Users</span>
                  <i className="fas fa-chevron-down dropdownIcon"></i>
                  <div className="nav-indicator"></div>
                </a>
                <ul className="dropdownMenu">
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-list"></i>All Users
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-plus"></i>Add User
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-shield-alt"></i>User Roles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-ban"></i>Blocked Users
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navItem has-dropdown">
                <a href="#" className="navLink dropdownToggle" onClick={toggleDropdown}>
                  <div className="nav-icon">
                    <i className="fas fa-box"></i>
                  </div>
                  <span className="nav-text">Products</span>
                  <i className="fas fa-chevron-down dropdownIcon"></i>
                  <div className="nav-indicator"></div>
                </a>
                <ul className="dropdownMenu">
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-list"></i>All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-plus"></i>Add Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-tags"></i>Categories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-warehouse"></i>Inventory
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-star"></i>Reviews
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <span className="nav-text">Orders</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
              
            </ul>
          </div>

           {/* Report & Analysis Section */}
          <div className="nav-section">
            <h3 className="nav-heading">
              <i className="fas fa-edit"></i>
              <span className="heading-text">Report & Analysis</span>
            </h3>
            <ul className="nav-menu">
              <li className="navItem has-dropdown">
                <a href="#" className="navLink dropdownToggle" onClick={toggleDropdown}>
                  <div className="nav-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <span className="nav-text">Pages</span>
                  <i className="fas fa-chevron-down dropdownIcon"></i>
                  <div className="nav-indicator"></div>
                </a>
                <ul className="dropdownMenu">
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-list"></i>All Pages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-plus"></i>Create Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-layer-group"></i>Templates
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  <span className="nav-text">Media Library</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-blog"></i>
                  </div>
                  <span className="nav-text">Blog Posts</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            </ul>
          </div>

          {/* Content Section */}
          <div className="nav-section">
            <h3 className="nav-heading">
              <i className="fas fa-edit"></i>
              <span className="heading-text">Content</span>
            </h3>
            <ul className="nav-menu">
              <li className="navItem has-dropdown">
                <a href="#" className="navLink dropdownToggle" onClick={toggleDropdown}>
                  <div className="nav-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <span className="nav-text">Pages</span>
                  <i className="fas fa-chevron-down dropdownIcon"></i>
                  <div className="nav-indicator"></div>
                </a>
                <ul className="dropdownMenu">
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-list"></i>All Pages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-plus"></i>Create Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdownLink">
                      <i className="fas fa-layer-group"></i>Templates
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  <span className="nav-text">Media Library</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-blog"></i>
                  </div>
                  <span className="nav-text">Blog Posts</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            </ul>
          </div>

          {/* Settings Section */}
          <div className="nav-section">
            <h3 className="nav-heading">
              <i className="fas fa-sliders-h"></i>
              <span className="heading-text">Settings</span>
            </h3>
            <ul className="nav-menu">
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  <span className="nav-text">General</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span className="nav-text">Security</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <div className="nav-icon">
                    <i className="fas fa-palette"></i>
                  </div>
                  <span className="nav-text">Appearance</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <button className="sidebar-toggle-btn" id="sidebarToggleBtn" ref={sidebarToggleBtnRef} onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
    </>
  );
};

export default Sidebar;
