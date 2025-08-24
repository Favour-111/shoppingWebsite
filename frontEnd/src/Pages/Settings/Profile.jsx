import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profile-page-body">
        <div className="settings-head">Account Setting</div>
        <div className="settings-label">Account details</div>
        <div className="settings-input-container">
          <div className="settings-input-item">
            <label className="settings-input-label" htmlFor="">
              Name
            </label>
            <input className="form-input" type="text" value="omojola" />
          </div>
          <div className="settings-input-item">
            <label className="settings-input-label" htmlFor="">
              Email
            </label>
            <input
              className="form-input"
              type="text"
              value="omojola@gail.com"
            />
          </div>
          <div className="settings-input-item">
            <label className="settings-input-label" htmlFor="">
              Phone Number
            </label>
            <input className="form-input" type="text" value="********705" />
          </div>
        </div>
        <div className="settings-line"></div>
        <div className="forgot-pass-settings">
          <div className="settings-label">Password</div>
          <div className="pass-text">can't remember your current Password?</div>
          <button>Reset passwords</button>
        </div>
        <div className="settings-line"></div>
        <div className="delete-acc">
          <div className="settings-label">Delete Account</div>
          <div className="delete-content">
            Would you like to delete your account?
          </div>
          <div className="delete-content">
            This account contains 12 orders. Deleting your account will remove
            all order details associated with it.
          </div>
          <button className="btn btn-outline-danger">
            I want to delete my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
