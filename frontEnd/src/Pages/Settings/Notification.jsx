import React from "react";

const Notification = () => {
  return (
    <div className="notification-container">
      <img
        src="https://threedio-prod-var-cdn.icons8.com/uf/preview_sets/previews/51scd-2MFESPi4kQ.webp"
        alt=""
      />
      <div>No notification yet</div>
      <div className="notification-text">
        no notifications yet come back later
      </div>
      <button>Refresh</button>
    </div>
  );
};

export default Notification;
