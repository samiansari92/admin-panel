// src/layouts/AdminLayout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const mobileOverlayRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const wasMobile = isMobile;
      setIsMobile(window.innerWidth <= 768);

      if (wasMobile !== isMobile) {
        if (!isMobile) {
          closeMobileSidebar();
        } else {
          const sidebar = document.getElementById("sidebar");
          if (sidebar) {
            sidebar.classList.remove("collapsed");
          }
        }
      }
    };

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-admin");
      if (window.scrollY > 10) {
        navbar.style.boxShadow = "var(--shadow-lg)";
      } else {
        navbar.style.boxShadow = "var(--shadow-sm)";
      }
    };

    const handleClickOutside = (e) => {
      if (
        mobileOverlayRef.current &&
        mobileOverlayRef.current.contains(e.target)
      ) {
        closeMobileSidebar();
      }
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "b") {
        e.preventDefault();
        if (!isMobile) {
          toggleSidebar();
        }
      }

      if (e.key === "Escape") {
        closeMobileSidebar();
        closeAllDropdowns();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile]);

  const toggleMobileSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const sidebar = document.getElementById("sidebar");
    if (sidebar && mobileOverlayRef.current) {
      sidebar.classList.toggle("mobile-open");
      mobileOverlayRef.current.classList.toggle("active");
      const isOpen = sidebar.classList.contains("mobile-open");
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  };

  const closeMobileSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && mobileOverlayRef.current) {
      sidebar.classList.remove("mobile-open");
      mobileOverlayRef.current.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("collapsed");
      const isCollapsed = sidebar.classList.contains("collapsed");
      setSidebarCollapsed(isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);

      const icon = document.querySelector(".sidebar-toggle-btn i");
      if (icon) {
        icon.className = isCollapsed ? "fas fa-chevron-right" : "fas fa-bars";
      }
    }
  };

  return (
    <>
      <Sidebar
        isMobile={isMobile}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="main-wrapper">
        <Navbar
          isMobile={isMobile}
          toggleMobileSidebar={toggleMobileSidebar}
           darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="main-content">
          {/* This is where nested routes get rendered */}
          <Outlet />
        </main>
      </div>
      <div className="mobile-overlay" ref={mobileOverlayRef}></div>
    </>
  );
};

export default Layout;
