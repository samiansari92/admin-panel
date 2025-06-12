import React, { useState, useRef } from 'react';

const Navbar = ({ isMobile, toggleMobileSidebar ,darkMode, setDarkMode }) => {
  const handleToggle = () => setDarkMode(prev => !prev);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileBtnRef = useRef(null);
  const profileMenuRef = useRef(null);

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <header className="navbar-admin">
      <div className="navbar-left">
        {isMobile && (
          <button className="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Toggle mobile menu" onClick={toggleMobileSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        )}
        <div className="breadCrumb">
          <span className="breadCrumb-item">Dashboard</span>
          <i className="fas fa-chevron-right"></i>
          <span className="breadCrumb-item current">Overview</span>
        </div>
      </div>
      <div className="navbar-right">
        <div>
          <a href="https://synilogictech.com" target="_blank" class="darkmode-toggle-btn" title="Go to Website">
  <i class="fas fa-globe fa-sm" style={{marginTop:"1px"}}></i>  <span className="custom-tooltip">
    Go To Website
  </span>
</a>

        </div>
        <div>
       <button onClick={handleToggle} className="darkmode-toggle-btn">
  <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
  <span className="custom-tooltip">
    {darkMode ? 'Turn on Light Mode' : 'Turn on Dark Mode'}
  </span>
</button>
</div>


        <div className={`profile-dropdown ${profileDropdownOpen ? "open" : ""}`}>
          <button className="profile-btn" id="profileBtn" ref={profileBtnRef} onClick={toggleProfileDropdown}>
            <img src="https://astro.synilogictech.com/uploads/setting/80364.png" alt="Profile" className="profile-avatar" />
            <div className="profile-info">
              <span className="profile-name">Synilogic</span>
            </div>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="profile-menu" id="profileMenu" ref={profileMenuRef}>
            <div className="profile-header">
              <img src="https://astro.synilogictech.com/uploads/setting/80364.png" alt="Profile" className="profile-menu-avatar" />
              <div>
                <div className="profile-menu-name">John Doe</div>
                <div className="profile-menu-email">john@example.com</div>
              </div>
            </div>
            <div className="profile-menu-items">
              <a href="#" className="profile-menu-item">
                <i className="fas fa-user"></i>
                <span>My Profile</span>
              </a>
              <a href="#" className="profile-menu-item">
                <i className="fas fa-cog"></i>
                <span>Account Settings</span>
              </a>
              <a href="#" className="profile-menu-item">
                <i className="fas fa-credit-card"></i>
                <span>Billing</span>
              </a>
              <a href="#" className="profile-menu-item">
                <i className="fas fa-question-circle"></i>
                <span>Help & Support</span>
              </a>
              <div className="profile-menu-divider"></div>
              <a href="#" className="profile-menu-item logout">
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
