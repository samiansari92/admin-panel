import React from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  return ( 
<>

<div className="dashboard-heading">
  <h2> App Installation Overview</h2>
</div>

 <div className="stats-grid">
                {/* <a href=""> */}
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon revenue">
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">45,678</h3>
                        <p className="stat-label">Astrologers App Installed</p>
                       
                    </div>
                </div>
                {/* </a> */}

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon users">
                           <i className="fas fa-user-slash"></i>
                        </div>
                        <div className="stat-trend negative">
                            <i className="fas fa-arrow-down"></i>
                            <span>-8.2%</span>
                        </div>
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">2,847</h3>
                        <p className="stat-label">Astrologers App Uninstalled</p>
                        
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon orders">
                           <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+3.1%</span>
                        </div>
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">1,234</h3>
                        <p className="stat-label">Customers App Installed</p>
                       
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon conversion">
                           <i className="fas fa-user-times"></i>
                        </div>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+5.7%</span>
                        </div>
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">2,456</h3>
                        <p className="stat-label">Customers App Uninstalled</p>
                       
                    </div>
                </div>
            </div>

<div className="dashboard-heading">
  <h2>Total Active</h2>
</div>
            <div className="stats-grid">
    {/* Astrologers */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon revenue">
                <i className="fas fa-user-astronaut"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">15 / <span className='sub-statNo'> 13</span></h3>
            <p className="stat-label">Astrologers</p>
        </div>
    </div>

    {/* Customers */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon users">
                <i className="fas fa-users"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">224 / <span className='sub-statNo'> 225</span></h3>
            <p className="stat-label">Customers</p>
        </div>
    </div>

    {/* Vendors */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon store">
                 <i className="fas fa-store"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">1 / <span className='sub-statNo'> 3</span></h3>
            <p className="stat-label">Vendors</p>
        </div>
    </div>

    {/* Total Products */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon box">
                <i className="fas fa-boxes"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">12</h3>
            <p className="stat-label">Total Products</p>
        </div>
    </div>

    {/* Total Blogs */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon blog">
                <i className="fas fa-blog"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">3 /<span className='sub-statNo'> 3</span></h3>
            <p className="stat-label">Total Blogs</p>
        </div>
    </div>

    {/* Astrologer Income */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon income">
                <i className="fas fa-rupee-sign"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">₹14,783.16</h3>
            <p className="stat-label">Astrologer Income</p>
        </div>
    </div>

    {/* GST Amount */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon tax">
                <i className="fas fa-receipt"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">₹1,782.30</h3>
            <p className="stat-label">Total GST Amount</p>
        </div>
    </div>

    {/* TDS Amount */}
    <div className="stat-card">
        <div className="stat-header">
            <div className="stat-icon deduction">
                <i className="fas fa-percentage"></i>
            </div>
        </div>
        <div className="stat-content">
            <h3 className="stat-number">₹1,583.98</h3>
            <p className="stat-label">Total TDS Amount</p>
        </div>
    </div>
</div>


   <div className="dashboard-heading">
  <h2>Pending</h2>
</div>

    <div className="stats-grid">
  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon blog-pending">
        <i className="fas fa-file-alt"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">0</h3>
      <p className="stat-label">Pending Blogs</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon orders-pending">
        <i className="fas fa-box-open"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">11</h3>
      <p className="stat-label">Pending Product Orders</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon orders-confirm">
        <i className="fas fa-check-circle"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">1</h3>
      <p className="stat-label">Confirm Product Orders</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon orders-dispatch">
        <i className="fas fa-truck"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">1</h3>
      <p className="stat-label">Dispatch Product Orders</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon service-pending">
        <i className="fas fa-clock"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">1</h3>
      <p className="stat-label">Pending Online Services</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon service-approved">
        <i className="fas fa-thumbs-up"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">0</h3>
      <p className="stat-label">Approved Online Services</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon withdrawal-pending">
        <i className="fas fa-wallet"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">1</h3>
      <p className="stat-label">Pending Withdrawal Payments</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <div className="stat-icon refund-pending">
        <i className="fas fa-undo-alt"></i>
      </div>
    </div>
    <div className="stat-content">
      <h3 className="stat-number">0</h3>
      <p className="stat-label">Pending Refund Requests</p>
    </div>
  </div>
</div>


    

</>
  );
};

export default Dashboard;
