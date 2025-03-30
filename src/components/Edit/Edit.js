import React, { useState } from "react";
import "./Edit.css"; // Import the CSS file
import profile from "./user (2).png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile"); // "profile", "address", "notifications", "security"
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", details: "22, Kothawal Street, Alandur, Chennai - 600016", isEditing: false },
    { id: 2, type: "Office", details: "33, Mount Road, Guindy, Chennai - 600032", isEditing: false },
  ]);
  const [newAddress, setNewAddress] = useState({ type: "", details: "" });

  // Add Address
  const addAddress = () => {
    if (newAddress.type && newAddress.details) {
      setAddresses([...addresses, { id: Date.now(), ...newAddress, isEditing: false }]);
      setNewAddress({ type: "", details: "" });
    }
  };

  // Delete Address
  const deleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  // Toggle Edit Mode
  const toggleEdit = (id) => {
    setAddresses(addresses.map((address) =>
      address.id === id ? { ...address, isEditing: !address.isEditing } : address
    ));
  };

  // Save Edited Address
  const saveEdit = (id, newDetails) => {
    setAddresses(addresses.map((address) =>
      address.id === id ? { ...address, details: newDetails, isEditing: false } : address
    ));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profile} alt="User" className="profile-img" />
        <div>
          <h2>Sam</h2>
          <p>sam@info.com</p>
        </div>
      </div>

      <div className="profile-content">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <button
            className={`sidebar-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Edit Profile
          </button>
          <button
            className={`sidebar-btn ${activeTab === "address" ? "active" : ""}`}
            onClick={() => setActiveTab("address")}
          >
            Manage Address
          </button>
          <button
            className={`sidebar-btn ${activeTab === "notifications" ? "active" : ""}`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={`sidebar-btn ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            Password & Security
          </button>
        </div>

        {/* Content Switch */}
        <div className="profile-form">
          {activeTab === "profile" && (
            <>
              <h3>Edit Profile</h3>
              <div className="form-group">
                <div className="input-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="input-field">
                  <label>Surname</label>
                  <input type="text" placeholder="Enter Surname" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-field full-width">
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email Address" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-field">
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
                <div className="input-field">
                  <label>Phone Number</label>
                  <div className="phone-input">
                    <select>
                      <option>+98</option>
                      <option>+91</option>
                      <option>+1</option>
                    </select>
                    <input type="text" placeholder="9120000000" />
                  </div>
                </div>
              </div>

              <button className="save-btn">Save</button>
            </>
          )}

          {activeTab === "address" && (
            <>
              <h3>Manage Address</h3>
              <div className="add-address-form">
                <input className="address-input"
                  type="text"
                  placeholder="Address Type (e.g., Home, Office)"
                  value={newAddress.type}
                  onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                />
                <input className="address-input"
                  type="text"
                  placeholder="Enter Address"
                  value={newAddress.details}
                  onChange={(e) => setNewAddress({ ...newAddress, details: e.target.value })}
                />
                <button className="add-address-btn" onClick={addAddress}>Add Address</button>
              </div>

              <div className="address-list">
                {addresses.map((address) => (
                  <div key={address.id} className="address-item">
                    <div>
                      <h4>{address.type}</h4>
                      {address.isEditing ? (
                        <input
                          type="text"
                          defaultValue={address.details}
                          onBlur={(e) => saveEdit(address.id, e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && saveEdit(address.id, e.target.value)}
                          autoFocus
                        />
                      ) : (
                        <p>{address.details}</p>
                      )}
                    </div>
                    <div className="address-actions">
                      <button className="edit-btn" onClick={() => toggleEdit(address.id)}>✏️</button>
                      <button className="delete-btn" onClick={() => deleteAddress(address.id)}>🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "notifications" && (
            <>
              <h3>Notifications</h3>
              <div className="notification-settings">
                <label>
                  <input type="checkbox" /> Email Notifications
                </label>
                <label>
                  <input type="checkbox" /> SMS Notifications
                </label>
                <label>
                  <input type="checkbox" /> Push Notifications
                </label>
              </div>
              <button className="save-btnn">Save</button>
            </>
          )}

          {activeTab === "security" && (
            <>
              <h3>Password & Security</h3>
              <div className="form-group">
                <div className="input-field">
                  <label>Current Password</label>
                  <input type="password" placeholder="Enter Current Password" />
                </div>
                <div className="input-field">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter New Password" />
                </div>
                <div className="input-field">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm New Password" />
                </div>
              </div>
              <button className="save-btn">Update Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
